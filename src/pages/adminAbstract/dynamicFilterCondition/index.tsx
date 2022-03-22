import { Select, Button, Input } from 'antd';
import styles from './index.less';
import { PlusOutlined } from '@ant-design/icons';
import { useImmer } from 'use-immer';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
const selectOption = [
  {
    name: '以...开始',
    value: 'StartsWith',
    type: 'input',
  },
  {
    name: '包含',
    value: 'Contains',
    type: 'input',
  },
  {
    name: '等于',
    value: 'Equal',
    type: 'input',
  },
  {
    name: '小于',
    value: 'Less',
    type: 'input',
  },
  {
    name: '小于等于',
    value: 'Less_Equal',
    type: 'input',
  },
  {
    name: '大于',
    value: 'Greater',
    type: 'input',
  },
  {
    name: '大于等于',
    value: 'Greater_Equal',
    type: 'input',
  },
  {
    name: '在列表...中',
    value: 'InList',
    type: 'list',
  },
  {
    name: '不以...开始',
    value: 'NotStartsWith',
    type: 'input',
  },
  {
    name: '不包含',
    value: 'NotContains',
    type: 'input',
  },
  {
    name: '不等于',
    value: 'NotEqual',
    type: 'input',
  },
  {
    name: '不在列表...中',
    value: 'NotInList',
    type: 'list',
  },
  {
    name: '为空',
    value: 'IsNull',
    type: 'empty',
  },
  {
    name: '不为空',
    value: 'IsNotNull',
    type: 'empty',
  },
  {
    name: '大于（字段）',
    value: 'Field_Greater',
    type: 'field',
  },
  {
    name: '小于（字段）',
    value: 'Field_Less',
    type: 'field',
  },
  {
    name: '大于等于（字段）',
    value: 'Field_Greater_Equal',
    type: 'field',
  },
  {
    name: '小于等于（字段）',
    value: 'Field_Less_Equal',
    type: 'field',
  },
  {
    name: '等于（字段）',
    value: 'Field_Equal',
    type: 'field',
  },
  {
    name: '不等于（字段）',
    value: 'Field_Not_Equal',
    type: 'field',
  },
];

export default forwardRef((props: any, ref: any) => {
  const { renderGroupSelectEl, prehandleFields, ruleDefinitionEdit } = props;

  const renderSelectOption = (selectOption: any) => {
    return (
      <>
        {selectOption.map((option: any) => {
          return (
            <Select.Option value={option.value} key={option.value}>
              {option.name}
            </Select.Option>
          );
        })}
      </>
    );
  };
  const selectOptionEl = renderSelectOption(selectOption);

  const simpleCondition: any = {
    class: 'SMPL',
    enabled: true,
    operator: '',
    expressions: [
      {
        class: 'ENTATTR',
        type: '',
        column: '',
      },
      {
        class: 'CONST',
        type: '',
        value: '',
      },
    ],
  };

  const compsitionCondition: any = {
    class: 'PDCT',
    enabled: true,
    linking: 'ALL',
    conditions: [simpleCondition],
  };
  const [ruleDefinition, updateRuleDefinition] = useImmer([
    {
      class: 'PDCT',
      enabled: true,
      linking: 'ALL',
      conditions: [simpleCondition],
    },
  ]);
  useEffect(() => {
    ruleDefinitionEdit.length && updateRuleDefinition(ruleDefinitionEdit);
  }, []);

  useImperativeHandle(ref, () => ({
    getRuleDefinition: () => ruleDefinition,
  }));

  const push = () => {
    updateRuleDefinition((draft) => {
      draft.push(compsitionCondition);
      console.log(ruleDefinition);
    });
  };
  const pushChild = (ruleIndex: number) => {
    updateRuleDefinition((draft: any) => {
      draft[ruleIndex].conditions.push(simpleCondition);
    });
  };

  const findTargeType = (target: any) => {
    const fields = target.split('.');
    const { children } = prehandleFields.find(
      (item: any) => item.value === fields[0],
    );
    return children.find((child: any) => child.value === fields[1]);
  };

  return (
    <>
      {ruleDefinition.map((rule: any, ruleIndex: number) => {
        return (
          <div className={styles.dynamicFilterCondition} key={ruleIndex}>
            <div className={styles.title}>
              <div className={styles.left}>
                <span>符合</span>
                <Select
                  style={{ width: 120 }}
                  value={rule.linking}
                  onChange={(e) => {
                    updateRuleDefinition((draft) => {
                      draft[ruleIndex].linking = e;
                    });
                  }}
                >
                  <Select.Option value="All">All</Select.Option>
                  <Select.Option value="Any">Any</Select.Option>
                  <Select.Option value="NotAll">NotAll</Select.Option>
                  <Select.Option value="None">None</Select.Option>
                </Select>
                <span>条件成立</span>
              </div>
              <div className={styles.right}>
                <Button
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    push();
                  }}
                >
                  <PlusOutlined />
                  添加
                </Button>
                <Button
                  onClick={() => {
                    pushChild(ruleIndex);
                  }}
                >
                  <PlusOutlined />
                  添加集
                </Button>
              </div>
            </div>
            {rule.conditions.map((item: any, index: number) => {
              return (
                <div className={styles.content} key={index}>
                  <Select
                    style={{ width: 160, marginRight: 10 }}
                    size="large"
                    value={item.expressions[0].column}
                    onChange={(e) => {
                      if (e) {
                        const { type } = findTargeType(e);
                        updateRuleDefinition((draft) => {
                          draft[ruleIndex].conditions[
                            index
                          ].expressions[0].column = e;
                          draft[ruleIndex].conditions[
                            index
                          ].expressions[0].type = type;
                        });
                      } else {
                        updateRuleDefinition((draft) => {
                          draft[ruleIndex].conditions[
                            index
                          ].expressions[0].column = '';
                          draft[ruleIndex].conditions[
                            index
                          ].expressions[0].type = '';
                        });
                      }
                    }}
                  >
                    <Select.Option value="">--请选择--</Select.Option>
                    {renderGroupSelectEl}
                  </Select>
                  <Select
                    style={{ width: 120 }}
                    size="large"
                    value={item.operator}
                    onChange={(e) => {
                      updateRuleDefinition((draft) => {
                        draft[ruleIndex].conditions[index].operator = e;
                        const target: any = selectOption.find(
                          (option) => option.value === e,
                        );
                        draft[ruleIndex].conditions[index].expressions[1].type =
                          target ? target.type : '';
                        draft[ruleIndex].conditions[
                          index
                        ].expressions[1].value = '';
                      });
                    }}
                  >
                    <Select.Option value="">--请选择--</Select.Option>
                    {selectOptionEl}
                  </Select>
                  {item.expressions[1].type === 'input' && (
                    <Input
                      size="large"
                      style={{ width: 120, marginLeft: 12 }}
                      value={item.expressions[1].value}
                      onChange={(e: any) => {
                        updateRuleDefinition((draft) => {
                          draft[ruleIndex].conditions[
                            index
                          ].expressions[1].value = e.target.value;
                        });
                      }}
                    ></Input>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
});

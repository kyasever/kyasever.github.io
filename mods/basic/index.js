/// <reference path="../../../typings/index.d.ts" />
// @ts-check

globalData.locale.registe({
  id: '主城',
  enableActions: ['修炼', '灵药堂'],
  desc: '这里是主城, 可以修炼, 交易材料法宝丹药等',
});

globalData.locale.registe({
  id: '郊区',
  enableActions: ['采药', '采矿', '战斗'],
  desc: '这里是郊外, 可以采药或者挖矿,也可以找怪打',
});

globalData.item.registeGroup([
  {
    id: '一品草药',
    rarity: 1,
    type: '草药',
  },
  {
    id: '二品草药',
    rarity: 2,
    type: '草药',
  },
  {
    id: '筑基丹',
    rarity: 2,
    type: '丹药',
  },
]);

import { List, Icon } from 'antd-mobile';
import * as React from 'react';

import './index.less';

const Item = List.Item;
const Brief = Item.Brief;

export default class Home extends React.Component<any, any> {

    state = {
        disabled: false,
    };

    render() {
        return (
        <div>
            <Icon
              size="lg"
              style={{fill: 'orange'}}
              type={require('!svg-sprite-loader!./viewed.svg')}
            />

            <List renderHeader={() => '基本样式'} className="my-list">
                <Item extra={'内容内容'}>标题文字</Item>
            </List>
            <List renderHeader={() => '带副标题'} className="my-list">
                <Item arrow="horizontal" multipleLine>
                标题文字 <Brief>副标题</Brief>
                </Item>
                <Item
                    multipleLine={true}
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                >
                    标题文字 <Brief>副标题</Brief>
                </Item>
            </List>
            <List renderHeader={() => '右侧自定义（无内容 / 文字 / 图片）'} className="my-list">
                <Item>标题文字</Item>
                <Item arrow="horizontal" onClick={() => {}}>标题文字</Item>
                <Item extra="内容内容" arrow="horizontal" onClick={() => {}}>标题文字</Item>
                <Item
                    multipleLine
                    extra="10:30"
                    align="top"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                >
                    标题文字 <Brief>副标题</Brief>
                </Item>
            </List>
            <List renderHeader={() => '垂直居中对齐'} className="my-list">
                <Item multipleLine extra="内容内容">
                标题文字 <Brief>副标题</Brief>
                </Item>
            </List>
            <List renderHeader={() => '左侧带图标'}>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    arrow="horizontal"
                    onClick={() => {}}
                >
                    我的钱包
                </Item>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    arrow="horizontal"
                >
                    我的花销占比
                </Item>
            </List>
            <List renderHeader={() => '文字换行'} className="my-list">
                <Item data-seed="logId">单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容</Item>
                <Item wrap>多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容</Item>
                <Item extra="内容内容" multipleLine align="top" wrap>
                    多行标题文字超长直接折行，文字可能比较长、文字可能比较长、
                </Item>
                <Item extra="没有箭头" arrow="empty" className="spe" wrap>
                    极个别情况下，单行标题文字可能比较长，文字可能比较长、文字可能比较长、靠近右边会折行
                </Item>
            </List>
            <List renderHeader={() => '其他'} className="my-list">
                <Item
                    disabled={this.state.disabled}
                    extra=""
                    onClick={(e) => { this.setState({ disabled: true }); }}
                >
                    点击禁用
                </Item>
                <Item>
                <select defaultValue="1">
                    <option value="1">这是原生 html select</option>
                    <option value="2" disabled>不可选</option>
                    <option value="3">选项3</option>
                </select>
                </Item>
            </List>
        </div>);
  }
}

import React, { Component } from 'react';
import './index.scss';
import { Card } from 'antd';

export default props => {
    return <>
        <div className='box'>
            <Card size="small" title="组件" extra={<a href="https://zh-hans.reactjs.org/docs/components-and-props.html#___gatsby">More</a>} style={{ width: 300, marginBottom: '10px' }}>
                <p style={{ width: '100%' }}>组件有无状态组件和class组件</p>
                <p>无状态组件：他只接受一个 props 属性，<br />
                    优点；加载快，渲染快<br />
                    缺点：功能单一，只能是存一些 dom 片段；<br />
                    使用：ui 组件去使用<br />
                </p>
                <p>class 组件：它拥有全部的 react 特性，<br />
                    优点：功能强大<br />
                    缺点：需要实例化，相对于无状态组件加载慢渲染慢；<br />
                    使用：作为功能组件<br />
                </p>
                <p>组件的三个要素：类型（自定义组件/原生 dom 类型），属性，内容或子元素</p>
                <h3>注意事项：</h3>
                <p>自定义组件在使用的时候，必须首字母是大写，{'<MyCOm />'};
                同样自定义组件手写字母不能是小写，因为小写的时候，react 会默认从原生的 dom 库里去找，找不到就报错了</p>
            </Card>
            <Card size="small" title="jsx" extra={<a href="https://zh-hans.reactjs.org/docs/jsx-in-depth.html#___gatsby">More</a>} style={{ width: 300, marginBottom: '10px' }}>
                <p>jsx是 createElement 方法的语法糖，是 js 的扩展，它看上去很像 html，但底层是 js，所以拥有全部的 js 特性</p>
                <p>{`<MyButton color="blue" shadowSize={2}>`}<br />
                    Click Me<br />
                    {`</MyButton>`}</p>
                <p>class组件可以参考工厂函数</p>
                <p>会编译为</p>
                <p>
                    React.createElement(<br />
                    MyButton,<br />
                    {`{color: 'blue', shadowSize: 2},`}<br />
                    'Click Me'<br />
                    )
                </p>
            </Card>
            <Card size="small" title="点组件概念" style={{ width: 300, marginBottom: '10px' }}>
                <p>一个对象属性得出的元素类型并使用 jsx 来书写</p>
                <p>好处：灵活，可复用性强</p>
                <p>点组件是用 props 控制的</p>
            </Card>
            <Card size="small" title="递归和闭包" style={{ width: 300, marginBottom: '10px' }}>
                <p>闭包：</p>
                <p>全局环境中可以访问局部环境变量<br />
                    闭包一般用在计数器，或者全局使用的变量的长存，为的是不污染全局，集中控制</p>
                <p>递归：</p>
                <p>递归组件完成不确定性嵌套的数据，但是数据结构必须统一<br />
                    必须要有终止条件
                </p>
            </Card>
            <Card size="small" title="setState" extra={<a href="https://zh-hans.reactjs.org/docs/react-component.html#setstate">More</a>} style={{ width: 300, marginBottom: '10px' }}>
                <p>在 react 中修改 state 是异步的，如果需要修改后立即拿到被修改后的 state，需要在使用 setState 的时候传函数的形式去写；</p>
                <p>setState({'{}'})===默认就是异步修改</p>
                <p>setState(fun,fun);===将异步修改为同步这两个回调，第一个是用来修改 state 的，第二个回调函数是获取被修改后的 state</p>
            </Card>
            <Card size="small" title="react 生命周期" extra={<a href="https://zh-hans.reactjs.org/docs/state-and-lifecycle.html#___gatsby">More</a>} style={{ width: 300, marginBottom: '10px' }}>
                <p>生命周期: 程序在不同阶段所呈现的状态；</p>
                <p>
                    挂载时有 constructor render componentDidMount<br />
                    更新时有 render componentDidUpate<br />
                    卸载时有 componentWillUnmount // 清除常占内存
            </p>
                <p>- component[组件]、Did[完成]、Will[准备]、Mount[挂载]、unMount[卸载]、update[更新]</p>
                <p>不常用生命周期：</p>
                <p>
                    shouldComponentUpdate ： <br />
                    定义：用来拦截新的属性和状态，用新旧值来控制组件是否更新，从而优化性能；<br />
                    参数：第一个是新的属性更新做处理，因为强制更新没有新的属性和状态；
            </p>
                <p>forceUpdate:强制更新</p>
            </Card>
            <Card size="small" title="合成事件" extra={<a href="https://zh-hans.reactjs.org/docs/events.html#___gatsby">More</a>} style={{ width: 300, marginBottom: '10px' }}>
                <p>清除冒泡：必须显示的使用 stopPropagation()<br />
                    event.stopPropagation();<br />
                    阻止默认事件：preventDefault();<br />
                    event.preventDefault();<br />
                    获取被触发元素<br />
                    event.target<br />
                    获取事件绑定的元素<br />
                    event.currentTarget;<br />
                    获取原生的 event 对象<br />
                    event.nativeEvent</p>
                <p>event 对象只要是在异步的方法里，就会丢失属性值<br />
                    解决办法：event.persist()强制去除合并事件，保留属性值 </p>
            </Card>
            <Card size="small" title="class 组件 this 指向" style={{ width: 300, marginBottom: '10px' }}>
                <p>箭头函数 优先使用 它的好处在于，我们的 this 指向是当前环境的对象，<br />
                    箭头函数自身没有 this，它会逐级向上找 this，找到后就拿过来。
            </p>
                <p>在 constructor 中设置 this 指向<br />
                    this.handleClick01 = this.handleClick01.bind(this)</p>
                <p>在标签上直接改变 this<br />
                    {'<button onClick={this.handleClick01.bind(this)}>点击我</button>'}</p>
            </Card>
            <Card size="small" title="key" style={{ width: 300, marginBottom: '10px' }} extra={<a href="https://zh-hans.reactjs.org/docs/lists-and-keys.html#___gatsby">More</a>}>
                <p>key 在哪里使用：
                </p>
                <p>-元素的 key 只有放在就近的数组上下文中才有意义</p>
                <p> key 只是在兄弟组件之间必须唯一 -不用担心整个项目里有重复的，只要是兄弟节点之间的 key 不重复就行</p>
            </Card>
            <Card size="small" title="state 和 props" extra={<a href="https://zh-hans.reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props">More</a>} style={{ width: 300, marginBottom: '10px' }}>
                <p>
                    state 状态<br />
                    定义：class 组件自由的状态；不可以直接修改，必须用 setState 方法<br />
                    作用：控制组件内的元素的状态
            </p>
                <p>
                    props 传值及组件间的通信；<br />
                    属性的默认值：defultProps：只有 class 组件有；<br />
                    属性的类型验证：propTypes：只有 class 组件有，需要引入第三方的包,要引入第三方的包'props-tyes'
            </p>
                <p>
                    总结：state 和 props<br />
                    相同点：1.都是存数据的 2.修改后都会触发更新 3.都是控制元素的<br />
                    不同点：1.状态是组件自身的，属性是父级传给子级的 2.状态是组件自身可以修改的，属性必须是父级修改 3.属性可以设置默认值和类型验证，状态没有
            </p>
            </Card>
            <Card size="small" title="受控组件和非受控组件" style={{ width: 300, marginBottom: '10px' }} extra={<a href="https://zh-hans.reactjs.org/docs/uncontrolled-components.html#___gatsby">More</a>}>
                <p>受控组件：</p>
                <p>表单元素是由 react 控制的</p>
                <p>非受控组价：</p>
                <p>{`<input type='file'></input>`}只读，设置 value 没用<br />
                    使用 ref 绑定的 input 元素<br />
                    button 按钮的值一般是写死的，所以它也是非受控组件
                </p>
                <p>button提交注意事项：</p>
                <p>提交按钮需要指定类型，否则每次点击都会触发 form 表单的默认事件，会导致提交表单刷新页面</p>
            </Card>
            <Card size="small" title="lazy懒加载" extra={<a href="https://zh-hans.reactjs.org/docs/code-splitting.html#code-splitting">More</a>} style={{ width: 300, marginBottom: '10px' }}>
                <p>按需加载组件 ---- 代码切割<br />
                    需要时加载，不需要是不加载
                </p>
                <p>问题：(需要被解决的问题)</p>
                <p>默认情况下，webpack 组件会将引入的所有组件都打包成一个 js 文件，当用户访问时，会造成请求消耗，对有些不常用的功能也会被加载出来，造成不必要的浪费</p>
                <p>解决：</p>
                <p>使用懒加载，按需加载组件，节省性能开销；拆分 js 文件，当用户操作需要显示该组件时才会加载出来</p>
                <p>语法：使用 React.lazy 方法加载组件</p>
                <p>使用 React.Suspense 组件包裹加载组件，该组件上有一个 fallback 属性，当懒加载还未加载成功时，显示 fallback 属性的内容</p>
                <p>缺点：</p>
                <p>增加了HTTP的请求；如果用户此时网络不好的话，就可能需要更多的时间加载组件；</p>
                <p>注意：</p>
                <p>在使用懒加载时，酌情使用，对于一些内容体积小的可以不用懒加载，尤其是首屏就需要用户看到的内容一律不用懒加载</p>
            </Card>
            <Card size="small" title="Hook" style={{ width: 300, marginBottom: '10px' }} extra={<a href="https://zh-hans.reactjs.org/docs/hooks-intro.html#___gatsby">More</a>}>
                <p>hooks 它不能用于 class 组件 他是为无状态组件量身打造的</p>
                <p>在 hooks 里修改值，他的运行方式使用新值替换掉旧值</p>
                <p>所以，对于复合型的值，我们需要手动的进行合并在调用修改</p>
                <p>生命周期：React.useEffect 合并了三个阶段</p>
                <p>{
                    `React.useEffect(() => {
                        // 生命周期合并了三个阶段
                        console.log('200');
                        return () => { // 在函数中优先执行
                            console.log(123456)
                        }
                    }, [obj.name]) // 指定监听的参数`
                }</p>
            </Card>
            <Card size="small" title="比较重要的知识点" style={{ width: 300, marginBottom: '10px' }}>
                <p>webpack：</p>
                <p>webpack 是一个将文件引入并合并到一个单独文件的过程，最终形成一个 “bundle”。接着在页面上引入该 bundle，整个应用即可一次性加载</p>
                <p>dangerouslySetInnerHTML：</p>
                <p>相当于 vue 里的 v-html<br />
                    {`<div dangerouslySetInnerHTML={props.text}>`}
                </p>
                <p>button提交注意事项：</p>
                <p>提交按钮需要指定类型，否则每次点击都会触发 form 表单的默认事件，会导致提交表单刷新页面</p>
            </Card>
        </div>

    </>
}
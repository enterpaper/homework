/**
 * Created by Adminstrator on 2017/8/18.
 */

/**
 * 功能：给定id查找所代表的节点，并返回
 * @param id
 * @returns {Element}
 */
function getEle(id){
    return document.getElementById(id);
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele) {
    return ele.firstElementChild || ele.firstChild;
}

/**
 * 通过firstChild获取第一个元素子节点
 * @param ele
 * @returns {*|Node}
 */
function getFirstNode2(ele) {
    var node = ele.firstChild;
    while(true) {
        if(node.nodeType === 1) {
            break;
        }
        node = node.nextSibling;
    }
    return node;
}

/**
 * 通过children获取第一个元素子节点
 * @param ele
 * @returns {*|HTMLElement}
 */
function getFirstNode3(ele) {
    return ele.children[0];
}

/**
 * 通过childNodes获取第一个元素子节点
 * @param ele
 * @returns {*}
 */
function getFirstNode4(ele) {
    var node = null;
    var arr = ele.childNodes;
    for(var i=0; i<arr.length; i++) {
        if(arr[i].nodeType === 1) {
            node = arr[i];
            break;
        }
    }
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele) {
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断，如果不是传递过来的元素本身，那么添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

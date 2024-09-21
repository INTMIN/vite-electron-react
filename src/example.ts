/**
 * @description 格式化字符串到数字
 * @author min
 * @date 21/09/2024
 * @param {string} str
 * @return {*}  {number}
 */
function ToNumber(str:string):number {
  return Number(str)
  
}

/**
 * @description  枚举类型为写死的类型 内部数据均为确定范围
 * @author min
 * @date 21/09/2024
 * @enum {number}
 */
enum TextObj{
  name='测试',
  value=0|1
}

/**
 * @description  不会有返回值的被称为never
 * @author min
 * @date 21/09/2024
 * @return {*}  {never}
 */
function noReturn():never {
  let a:any;
  let b:unknown;// 区别是unknown 不判断类型前不能直接使用加减运算

  let c:bigint;// 这个是说明 大整数，如果转化为number可能会丢失精度
  throw new Error('error');
}


// 交叉类型  一般用于给对应对象添加新属性
type A = {foo:number}
type B = A&{foot:string}


// 可能是数字或者字符串数组 下面两个等效
let arr:(number|string)[]
let newArr:Array<string|number>

// readonly 不能给数组的泛型一起使用 下面的写法会报错
// let readArr:readonly Array<string|number>=[1,2]
let readArr:readonly number[] = [1,2]
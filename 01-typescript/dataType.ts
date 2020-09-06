// 1. 布尔类型
let done: boolean = true
done = Boolean(555)

// 2. number类型
let num: number = 1
let num16: number = 0xf00a //16进制
let notNum: number = NaN
let infNum: number = Infinity // 无穷大

// 3. 字符串
let usrname: string = '宝树呐'
let sentence: string = `年龄是:${666}`

// 4. 空值
function hello2(): void {
    console.log('hello world')
}

let a = hello2()
console.log(a)

// 5. 任意类型
let an: any = 1
an = 'emm'
console.log(an.property)

let aa

// 6. 联合类型
let cat: string | number
cat = 1
cat = 'emm'

// 7. 数组
let arr:number[] = []
arr.push(1)

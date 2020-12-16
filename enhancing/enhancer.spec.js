const enhancer = require('./enhancer.js');
const Item = enhancer.Item

// test away!
describe('Sanity check', () => {
    it('works', () => {
        expect(2+2).toBe(4)
        expect({}).toEqual({})
    })
})

describe('Item class', () => {
    let throwingStar
    beforeEach(() => {
        throwingStar = new Item ('Throwing Star', 90, 18)
    })
    it('Item is defined in enhancer.js', () => {
        expect(Item).toBeDefined()
    })
    it('Can make instances of Items', () => {
        expect(throwingStar).toBeInstanceOf(Item)
    })
    it('Items have name, durability, and enhancement properties', () => {
        expect(throwingStar).toMatchObject({ name: 'Throwing Star', durability: 90, enhancement: 18 })
    })
    it('Enhancer contains success, fail, and repair methods', () => {
        expect(enhancer.success).toBeTruthy()
        expect(enhancer.fail).toBeTruthy()
        expect(enhancer.repair).toBeTruthy()
    })
    it('Repairing returns a new Item with the durability restored to 100', () => {
        expect(enhancer.repair(throwingStar)).toMatchObject({ name: 'Throwing Star', durability: 100, enhancement: 18 })
    })
    it('Success enhancing an Item increases its enhancement by 1 if < 20, else no increase', () => {
        let enhanced = enhancer.success(throwingStar)
        expect(enhanced.enhancement).toBe(19)
        enhanced = enhancer.success(enhanced)
        expect(enhanced.enhancement).toBe(20)
        enhanced = enhancer.success(enhanced)
        expect(enhanced.enhancement).toBe(20)
        enhanced = enhancer.success(enhanced)
        expect(enhanced.enhancement).toBe(20)
    })
    it('Success enhancing an Item does not impact its durability', () => {
        expect(throwingStar.durability).toBe(90)
        const enhanced = enhancer.success(throwingStar)
        expect(enhanced.durability).toBe(90)
    })
    it('Fail enhancing an Item decreases its durability by 5 if enhancement < 15', () => {
        let sword = new Item('Broadsword', 90,14)
        let enhanced = enhancer.fail(sword)
        expect(enhanced.durability).toBe(85)
        enhanced = enhancer.fail(enhanced)
        expect(enhanced.durability).toBe(80)
        expect(enhanced.enhancement).toBe(14)
    })
    it('Fail enhancing an Item enhancement is unchanged if enhancement < 15', () => {
        let sword = new Item('Broadsword', 90,14)
        let enhanced = enhancer.fail(sword)
        expect(enhanced.enhancement).toBe(14)
        enhanced = enhancer.fail(enhanced)
        expect(enhanced.enhancement).toBe(14)
    })
    it('Fail enhancing an Item decreases its durability by 10 and does not change enhancement if enhancement between 15 and 16 (inclusive)', () => {
        expect(throwingStar.durability).toBe(90)
        expect(throwingStar.enhancement).toBe(18)
        let enhanced = enhancer.fail(throwingStar)
        expect(enhanced.durability).toBe(80)
        expect(enhanced.enhancement).toBe(17)
        enhanced = enhancer.fail(enhanced)
        expect(enhanced.durability).toBe(70)
        expect(enhanced.enhancement).toBe(16)
        enhanced = enhancer.fail(enhanced)
        expect(enhanced.durability).toBe(60)
        expect(enhanced.enhancement).toBe(16)
    })
    it('Fail enhancing an Item decreases its durability by 10 and does not change enhancement if enhancement between 15 and 16 (inclusive)', () => {
        expect(throwingStar.enhancement).toBe(18)
        expect(throwingStar.durability).toBe(90)
        let enhanced = enhancer.fail(throwingStar)
        expect(enhanced.durability).toBe(80)
        expect(enhanced.enhancement).toBe(17)
    })
    it('', () => {
    })
})

describe('', () => {
        
})
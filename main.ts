namespace SpriteKind {
    export const GOD = SpriteKind.create()
    export const Environment = SpriteKind.create()
}
function getLife () {
    heart = sprites.create(img`
        . . f f . f f . . 
        . f 2 2 f 2 2 f . 
        f 2 1 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 f 
        . f 2 2 2 2 2 f . 
        . . f 2 2 2 f . . 
        . . . f 2 f . . . 
        . . . . f . . . . 
        `, SpriteKind.Food)
    heart.setPosition(10 + 12 * list2.length, 10)
    list2.push(heart)
}
function makeDroppings () {
    gooseFeces = sprites.create(img`
        . . f . . f . . . 
        . . . . . . . . . 
        f . . . . . . . f 
        . f . . . f . . . 
        . . . . . . . . . 
        e e 7 e . e . . . 
        . e e e . 7 e e . 
        . . . . 7 7 e e . 
        e e e . e . e . . 
        . . e e . . . . . 
        `, SpriteKind.Enemy)
    gooseFeces.setPosition(180 + randint(0, 80), 30 * randint(0, 2) + 30)
    gooseFeces.setVelocity(-80 * gameSpeed, 0)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumping == 0) {
        jumping = 1
        me.setImage(img`
            .....fffff......
            ....feeeeef.....
            ...feeeeeeef....
            ..feeeeeeeeef...
            ..feedeeeeeef...
            ..fedddddddeff..
            .ffd111d111dfdf.
            fdfd181d181dfdf.
            fdfd111d111dff..
            .ffdddddddddf...
            ..fddd333dddf...
            ...fdddddddfff..
            ....ffffffff45f.
            ..ffffd9dff6f5f.
            ..f996ddd699f5f.
            ..f996ddd699f5f.
            ..fffccfccfff5ff
            ....fddfddf4444f
            ....f11f11ffffff
            ....fffffff.....
            `)
        pause(500)
        me.setImage(img`
            .....fffff......
            ....feeeeef.....
            ...feeeeeeef....
            ..feeeeeeeeef...
            ..feedeeeeeef...
            ..fedddddddeff..
            .ffdfffdfffdfdf.
            fdfd181d181dfdf.
            fdfdddddddddff..
            .ffdddddddddf...
            ..fddd333dddf...
            ...fdddddddfff..
            ..f.ffffffff45f.
            .fdff49994f6f5f.
            fddff59995f9f5f.
            fdd6f59995f9f5f.
            .ffff69996f9f5ff
            ....f99999f9f44f
            ....ffffffffffff
            ....fccfccfdf...
            ....fccfccff....
            ....fccfccf.....
            ....fffffff.....
            ....fddfddf.....
            ....f11f11f.....
            .....ff.ff......
            `)
        jumping = 0
    }
})
function animateEnv_trees () {
    env_tree_randomizer = randint(0, 3)
    if (env_tree_randomizer == 0) {
        env_tree_list.push(sprites.create(img`
            . . . . . . . c c . . . . . . . 
            . . . . c c c 6 5 c 6 6 . . . . 
            . . . . c 6 c 5 5 c 7 6 . . . . 
            . . . 6 c c 7 5 5 7 c 6 6 . . . 
            . . c c 7 7 7 7 7 5 7 7 c 6 . . 
            . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
            c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
            c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
            . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
            . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
            . c c c c 7 7 6 f 7 7 c c c c . 
            . . . . c 7 c f f c 7 c . . . . 
            . . . . . 6 f e e e c . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e . e e . e e . . . . 
            . . . . . . . e e . . . . . . . 
            `, SpriteKind.Environment))
    } else if (env_tree_randomizer == 1) {
        env_tree_list.push(sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . c c c . . . 
            . c c 6 6 c . . 
            c c 3 3 f 6 c . 
            c 6 c f 6 3 c . 
            c 3 6 3 3 3 c . 
            c 3 6 6 3 3 c . 
            c 3 3 6 6 3 c . 
            . c 3 3 3 6 . . 
            . . 6 7 6 . . . 
            . . 6 6 8 8 8 6 
            . . 6 8 7 7 7 6 
            . . 8 7 7 7 6 . 
            . . 8 8 8 6 . . 
            `, SpriteKind.Environment))
    } else if (env_tree_randomizer == 2) {
        env_tree_list.push(sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . b b d d b b . 
            b 1 1 3 3 1 1 b 
            b 1 3 5 5 3 1 b 
            b d 3 5 5 3 d b 
            c 1 1 d d 1 1 c 
            c d 1 d d 1 d c 
            . c c 7 6 c c . 
            . . 6 7 6 . . . 
            . . 6 6 8 8 8 6 
            . . 6 8 7 7 7 6 
            . . 8 7 7 7 6 . 
            . . 8 8 8 6 . . 
            `, SpriteKind.Environment))
    } else {
        env_tree_list.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c 6 . . . . . 
            . . . . c c 6 7 7 5 5 6 6 . . . 
            . . c c 6 6 6 6 7 5 5 7 c c . . 
            . c 6 6 6 7 7 7 7 7 7 5 6 c c . 
            . c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
            c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
            c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
            c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
            . c c 6 6 6 6 c 6 6 6 6 6 c c c 
            . c c 6 6 c 6 6 c 6 c 6 6 c c . 
            . . c c f f 6 6 c f f c c f . . 
            . . . . c f c c c f c f f . . . 
            . . . . . 4 f f f c . e . . . . 
            . . . . . . e e e . . 4 . . . . 
            . . . . . . . e e . e . . . . . 
            `, SpriteKind.Environment))
    }
    env_tree_list[env_tree_list.length - 1].setPosition(180 + randint(0, 40), 20)
    env_tree_list[env_tree_list.length - 1].setVelocity(-80 * gameSpeed, 0)
    env_tree_list[env_tree_list.length - 1].z = -1
}
function makeGoose () {
    goose = sprites.create(img`
        ....ffff.................
        ..ffeeeef................
        .fcceefeef...............
        fccceeeeeef..............
        fccceeeeeeef.............
        .ffffffeeeeef............
        .......feeeeefff...ffffff
        ......f1eeeeeeeffff1eee1f
        .......f1eeeeeeeeeeeee1ef
        ......f1eeeeffffeeeee1eef
        ......feeeeffffffeee1eeef
        ......feeeff5555ffeeeee1f
        .....feeeeff5555ffeeee1ff
        .....feeeeff5555ffeeee1f.
        .....feee1fff55fffeeeef..
        .....f1eee1ffffffeeeef...
        .....f1eeee1ffffeeeef....
        ......f11eee11eeeeeef....
        .......fffeeeeeeeeccf....
        ..........fccfffffccf....
        ..........fccf...fccf....
        ..........fccf...fccf....
        ..........fccf...fccf....
        .........ffccf..ffccf....
        .........fcccf..fcccf....
        .........fffff..fffff....
        `, SpriteKind.Enemy)
    goose.setPosition(160 + randint(0, 80), 30 * randint(0, 2) + 30)
    goose.setVelocity(-80 * gameSpeed, 0)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumping == 0) {
        if (movement > 0) {
            movement += -1
            me.y += -30
        }
    }
})
function makeCar () {
    car = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    car.setPosition(180 + randint(0, 80), 100)
    car.setVelocity(0, 0)
    car.ax = gameSpeed * -40
}
function loseLife () {
    list2[list2.length - 1].destroy()
    list2.pop()
    if (0 == list2.length) {
        gameRunning = 0
        scene.setBackgroundColor(15)
        game.setDialogTextColor(2)
        game.showLongText("WASTED", DialogLayout.Bottom)
        game.reset()
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumping == 0) {
        if (movement < 2) {
            movement += 1
            me.y += 30
        }
    }
})
function makeBedi () {
    Bedi = sprites.create(img`
        ..55...55..5..55....
        ...55...5....55.....
        55..55.fffff.5......
        .55...fffffff....555
        ..55.fffffffff..55..
        5...fffffffffff.5...
        555.fffefffffff...55
        ....ffeeeeeeefff.55.
        ...ffefffefffefe....
        ..fefe1f1e1f1efe..55
        55fefe1f1e1f1eff.55.
        ...ffedddddddef.....
        ..5.fddd333dddf...55
        555..fdddddddff..55.
        ....fffdddddff.....5
        ....f1f11111f1f..555
        5555f1f11111f1f.55..
        ....f1f11111f1f.5...
        ....f1f11111f1f.....
        ..5.f1f11111f1f.5555
        555.fffffffffff.....
        ....fefccfccfef.555.
        .55..ffccfccff..5.55
        5.....fccfccf.......
        ...55.fffffff..55555
        ...5..feefeef......5
        ..5...f11f11f.5555..
        .55..5.ff.ff.....55.
        .5..55..5...5.......
        ....5...5...555.....
        `, SpriteKind.GOD)
    Bedi.setPosition(2000 + randint(0, 1500), 30 * randint(0, 2) + 30)
    Bedi.setVelocity(-80 * gameSpeed, 0)
}
function animateEnv_Road () {
    env_road_list.push(sprites.create(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.Environment))
    env_road_list[env_road_list.length - 1].setPosition(180, 119)
    env_road_list[env_road_list.length - 1].setVelocity(-80 * gameSpeed, 0)
    env_road_list[env_road_list.length - 1].z = -1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.GOD, function (sprite, otherSprite) {
    getLife()
    Bedi.destroy()
    makeBedi()
})
function animateEnv_Cloud () {
    env_cloud_randomizer = randint(0, 3)
    if (env_cloud_randomizer == 0) {
        env_cloud_list.push(sprites.create(img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . 1 1 . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . 1 1 1 1 1 1 . . . . . . . . 
            `, SpriteKind.Environment))
    } else if (env_cloud_randomizer == 1) {
        env_cloud_list.push(sprites.create(img`
            . . . . . . . . 1 1 1 1 1 . . . 
            . . . . . . . . 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 . 1 1 1 1 1 1 1 1 1 1 1 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Environment))
    } else if (env_cloud_randomizer == 2) {
        env_cloud_list.push(sprites.create(img`
            . . . . 1 . . . . . . . . . . . 
            . . 1 1 1 . . . . . 1 1 1 1 1 . 
            . 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            `, SpriteKind.Environment))
    } else {
        env_cloud_list.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 1 . . . 1 . 1 . . . 1 . . . 1 
            . 1 . . . 1 . 1 . . . 1 . . . 1 
            . 1 . . . 1 . 1 1 . 1 1 1 . 1 1 
            . 1 . . . 1 . . 1 . 1 . 1 . 1 . 
            . 1 1 . 1 1 . . 1 1 1 . 1 1 1 . 
            . 1 1 1 1 1 . . . 1 . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Environment))
    }
    env_cloud_list[env_cloud_list.length - 1].setPosition(180 + randint(0, 40), randint(0, 15) + 5)
    env_cloud_list[env_cloud_list.length - 1].setVelocity(-20 * gameSpeed, 0)
    env_cloud_list[env_cloud_list.length - 1].z = -1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (jumping == 1 && me.overlapsWith(gooseFeces)) {
        gooseFeces.destroy()
        pause(500)
        makeDroppings()
    } else {
        loseLife()
        goose.destroy()
        makeGoose()
        gooseFeces.destroy()
        makeDroppings()
    }
})
let car_counter = 0
let env_cloud_list: Sprite[] = []
let env_cloud_randomizer = 0
let env_road_list: Sprite[] = []
let Bedi: Sprite = null
let goose: Sprite = null
let env_tree_list: Sprite[] = []
let env_tree_randomizer = 0
let jumping = 0
let heart: Sprite = null
let list2: Sprite[] = []
let car: Sprite = null
let gooseFeces: Sprite = null
let gameRunning = 0
let movement = 0
let gameSpeed = 0
let me: Sprite = null
game.setDialogTextColor(15)
scene.setBackgroundColor(15)
me = sprites.create(img`
    .....fffff......
    ....feeeeef.....
    ...feeeeeeef....
    ..feeeeeeeeef...
    ..feedeeeeeef...
    ..fedddddddeff..
    .ffdfffdfffdfdf.
    fdfd181d181dfdf.
    fdfdddddddddff..
    .ffdddddddddf...
    ..fddd333dddf...
    ...fdddddddfff..
    ..f.ffffffff45f.
    .fdff49994f6f5f.
    fddff59995f9f5f.
    fdd6f59995f9f5f.
    .ffff69996f9f5ff
    ....f99999f9f44f
    ....ffffffffffff
    ....fccfccfdf...
    ....fccfccff....
    ....fccfccf.....
    ....fffffff.....
    ....fddfddf.....
    ....f11f11f.....
    .....ff.ff......
    `, SpriteKind.Player)
me.y = 20
game.splash("You're late for class!", "Avoid the geese!")
gameSpeed = 1
me.setPosition(20, 60)
movement = 1
gameRunning = 1
info.setScore(0)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
makeGoose()
makeDroppings()
makeCar()
makeBedi()
animateEnv_Cloud()
animateEnv_Road()
animateEnv_trees()
gooseFeces.setVelocity(0, 0)
car.setVelocity(0, 0)
car.ax = 0
list2 = []
for (let index = 0; index < 2; index++) {
    getLife()
}
forever(function () {
    if (gameRunning == 1) {
        info.changeScoreBy(1)
        if (info.score() > (gameSpeed - 0.9) * 3000) {
            gameSpeed += 0.1
        }
        if (goose.x < 0) {
            goose.destroy()
            makeGoose()
        }
        if (info.score() == 700 || gooseFeces.x < 0) {
            gooseFeces.destroy()
            makeDroppings()
        }
        if (info.score() >= 1000 && Math.percentChance(gameSpeed * 0.01) && car_counter <= 0) {
            makeCar()
            car_counter = randint(100, 1000)
        }
        if (car_counter > 0) {
            car_counter = car_counter - 1
        }
        if (car.x < -20) {
            car.destroy()
        }
        if (info.score() == 1500 || Bedi.x < 0) {
            Bedi.destroy()
            makeBedi()
        }
        if (env_cloud_list[env_cloud_list.length - 1].x < randint(0, 100)) {
            animateEnv_Cloud()
        }
        if (env_cloud_list[0].x < -20) {
            env_cloud_list[0].destroy()
            env_cloud_list.shift()
        }
        if (env_road_list[env_road_list.length - 1].x < 100) {
            animateEnv_Road()
        }
        if (env_road_list[0].x < -20) {
            env_road_list[0].destroy()
            env_road_list.shift()
        }
        if (env_tree_list[env_tree_list.length - 1].x < randint(0, 100)) {
            animateEnv_trees()
        }
        if (env_tree_list[0].x < -20) {
            env_tree_list[0].destroy()
            env_tree_list.shift()
        }
    }
})

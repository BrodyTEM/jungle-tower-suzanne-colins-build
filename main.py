@namespace
class SpriteKind:
    pizzer = SpriteKind.create()
    same = SpriteKind.create()
    frien = SpriteKind.create()

def on_on_overlap(sprite4, otherSprite):
    otherSprite.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_up_pressed():
    tiles.set_wall_at(tiles.location_in_direction(tiles.location_of_sprite(mySprite),
            CollisionDirection.BOTTOM),
        True)
    tiles.set_tile_at(tiles.location_in_direction(tiles.location_of_sprite(mySprite),
            CollisionDirection.BOTTOM),
        assets.tile("""
            bounce
        """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite14, location12):
    tiles.set_current_tilemap(tilemap("""
        level24
    """))
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    animation.run_movement_animation(mySprite2,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile9
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite6, location5):
    tiles.set_wall_at(location5, False)
    tiles.set_tile_at(location5, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.projectile,
    assets.tile("""
        bounce
    """),
    on_overlap_tile2)

def on_b_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        mySprite,
        0,
        0)
    projectile.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
    animation.run_image_animation(projectile, assets.animation("""
        splode
    """), 100, False)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile3(sprite17, location15):
    tiles.set_tilemap(tilemap("""
        level3
    """))
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    animation.run_movement_animation(mySprite2,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile3)

def on_a_pressed():
    simplified.gravity_jump(mySprite)
    animation.run_image_animation(mySprite, assets.animation("""
        jump
    """), 150, False)
    music.play(music.create_sound_effect(WaveShape.NOISE,
            2638,
            3321,
            203,
            0,
            500,
            SoundExpressionEffect.VIBRATO,
            InterpolationCurve.LOGARITHMIC),
        music.PlaybackMode.UNTIL_DONE)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            walk left
        """),
        150,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile4(sprite7, location6):
    tiles.set_current_tilemap(tilemap("""
        level16
    """))
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    animation.run_movement_animation(mySprite2,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile8
    """),
    on_overlap_tile4)

def on_countdown_end():
    global mySprite2
    mySprite2 = sprites.create(assets.image("""
        baddude
    """), SpriteKind.pizzer)
    mySprite2.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
    mySprite2.follow(mySprite, 60)
info.on_countdown_end(on_countdown_end)

def on_overlap_tile5(sprite15, location13):
    game.over(False, effects.blizzard)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        poison pit
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite12, location10):
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    animation.run_movement_animation(mySprite2,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    tiles.set_current_tilemap(tilemap("""
        secrt
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        notpit
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite10, location8):
    mySprite.say("Level 2: Fnatj")
    scene.set_background_image(assets.image("""
        background2
    """))
    tiles.set_tilemap(tilemap("""
        level2
    """))
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    animation.run_movement_animation(mySprite2,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        chest1
    """),
    on_overlap_tile7)

def on_on_overlap2(sprite9, otherSprite2):
    info.change_life_by(-3)
    game.set_game_over_message(False, "TIME UP!!")
sprites.on_overlap(SpriteKind.pizzer, SpriteKind.player, on_on_overlap2)

def on_right_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            walk right
        """),
        150,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile8(sprite8, location7):
    tiles.set_current_tilemap(tilemap("""
        level11
    """))
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    animation.run_movement_animation(mySprite2,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
    """),
    on_overlap_tile8)

def on_overlap_tile9(sprite18, location16):
    info.change_score_by(20)
    tiles.set_tile_at(location16, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        gold crate
    """),
    on_overlap_tile9)

def on_overlap_tile10(sprite, location):
    tiles.set_wall_at(location, False)
    tiles.set_tile_at(location, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.projectile,
    assets.tile("""
        skyblock
    """),
    on_overlap_tile10)

def on_overlap_tile11(sprite5, location4):
    tiles.set_wall_at(location4, False)
    tiles.set_tile_at(location4, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.projectile,
    assets.tile("""
        poison pit
    """),
    on_overlap_tile11)

def on_down_pressed():
    if randint(1, 3) == 1:
        animation.run_image_animation(mySprite,
            assets.animation("""
                yippidotAVI
            """),
            500,
            False)
        info.change_score_by(1)
    elif randint(1, 3) == 2:
        animation.run_image_animation(mySprite,
            assets.animation("""
                AVIdotAVI
            """),
            500,
            False)
        info.change_score_by(1)
    else:
        animation.run_image_animation(mySprite,
            assets.animation("""
                GOTEMdotAVI
            """),
            200,
            False)
        info.change_score_by(1)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile12(sprite3, location3):
    game.splash("if you are reading this, you should know the thing that inspired this, pizza tower, also i like a show i have not watched in a while, the owl house")
    info.change_score_by(5)
    tiles.set_tile_at(location3, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        purplebuble
    """),
    on_overlap_tile12)

def on_overlap_tile13(sprite11, location9):
    info.change_score_by(1)
    tiles.set_tile_at(location9, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        orange bauble
    """),
    on_overlap_tile13)

def on_overlap_tile14(sprite13, location11):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        chest2
    """),
    on_overlap_tile14)

def on_overlap_tile15(sprite2, location2):
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
    """),
    on_overlap_tile15)

def on_overlap_tile16(sprite16, location14):
    tiles.set_current_tilemap(tilemap("""
        level20
    """))
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    animation.run_movement_animation(mySprite2,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile16)

def on_overlap_tile17(sprite19, location17):
    tiles.set_current_tilemap(tilemap("""
        level25
    """))
    animation.run_movement_animation(mySprite,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
    animation.run_movement_animation(mySprite2,
        animation.animation_presets(animation.fly_to_center),
        2000,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        secrt2
    """),
    on_overlap_tile17)

def on_overlap_tile18(sprite20, location18):
    scene.set_background_image(assets.image("""
        ecape
    """))
    info.start_countdown(90)
    tiles.set_tilemap(tilemap("""
        level4
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        fire
    """),
    on_overlap_tile18)

projectile: Sprite = None
mySprite: Sprite = None
mySprite2: Sprite = None
scene.set_background_image(assets.image("""
    background
"""))
tiles.set_tilemap(tilemap("""
    level1
"""))
mySprite2 = sprites.create(assets.image("""
    kat
"""), SpriteKind.frien)
mySprite = sprites.create(assets.image("""
    gwen
"""), SpriteKind.player)
mySprite2.follow(mySprite, 125)
controller.move_sprite(mySprite, 100, 0)
mySprite.ay = 500
scene.camera_follow_sprite(mySprite)
game.splash("you are a female chimp name gendlin,you have heard of the fire of enlighenment,you are traveling there with your bf, cat.",
    "objective: find the fire of enlightenment and survive the malicious god that gives you 90 seconds to escape")
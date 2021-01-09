#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.5),
    on enero 09, 2021, at 10:37
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.5'
expName = 'piloto'  # from the Builder filename that created this script
expInfo = {'nombre': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sort_keys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['nombre'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\LENOVO\\OneDrive\\Desktop\\sonico-master\\piloto.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1366, 768], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "intro"
introClock = core.Clock()
mensaje_intro = visual.TextStim(win=win, name='mensaje_intro',
    text='Bienvenido al juego de subasta\n\nOprima el botón rojo para avanzar.',
    font='Arial',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
boton_intro = visual.Polygon(
    win=win, name='boton_intro',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_intro = event.Mouse(win=win)
x, y = [None, None]
mouse_intro.mouseClock = core.Clock()

# Initialize components for Routine "intro_2"
intro_2Clock = core.Clock()
mensaje_intro_2 = visual.TextStim(win=win, name='mensaje_intro_2',
    text='A continuación, usted participará en un juego de diferentes subastas.\nEste juego dispondrá de múltiples subastas por diferentes productos, donde deberá indicar la suma de dinero que está dispuesto a pagar por ellos. \n• En cada subasta, usted será expuesto a un sonido durante 5 segundos mientras observa una pantalla gris. \n• Al cabo de este tiempo, se le mostrará una pantalla donde en la parte superior habrá un producto alimenticio y en la parte inferior una barra deslizadora que va desde cero hasta 5 mil pesos colombianos. \n• Para responder, usted debe mover el cursor sobre la barra hasta el valor deseado y hacer click. \n• Luego de esto, el sistema seguirá automáticamente a la siguiente ronda donde se repetirá el proceso con un bien distinto. ',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
boton_intro_2 = visual.Polygon(
    win=win, name='boton_intro_2',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_intro_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_intro_2.mouseClock = core.Clock()

# Initialize components for Routine "intro_prueba"
intro_pruebaClock = core.Clock()
text_prueba = visual.TextStim(win=win, name='text_prueba',
    text='En este momento, realizará 2 rondas de prueba del juego, para que se familiarice con su apariencia y dinámica.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
boton_intro_prueba = visual.Polygon(
    win=win, name='boton_intro_prueba',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_intro_prueba = event.Mouse(win=win)
x, y = [None, None]
mouse_intro_prueba.mouseClock = core.Clock()

# Initialize components for Routine "prueba_1"
prueba_1Clock = core.Clock()
sonido_prueba = sound.Sound('A', secs=1, stereo=True, hamming=True,
    name='sonido_prueba')
sonido_prueba.setVolume(1.0)
image_prueba = visual.ImageStim(
    win=win,
    name='image_prueba', 
    image='imagenes/lapicero.jpg', mask=None,
    ori=0, pos=(0, 0.2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
slider_prueba = visual.Slider(win=win, name='slider_prueba',
    size=(1.0, 0.05), pos=(0, -0.3), units=None,
    labels=("0","1000","2000","3000","4000","5000"), ticks=(1, 2, 3, 4, 5, 6),
    granularity=0, style=['whiteOnBlack'],
    color='DimGrey', font='HelveticaBold',
    flip=False, depth=-2)

# Initialize components for Routine "prueba_2"
prueba_2Clock = core.Clock()
sonido_prueba_2 = sound.Sound('A', secs=1, stereo=True, hamming=True,
    name='sonido_prueba_2')
sonido_prueba_2.setVolume(1.0)
image_prueba_2 = visual.ImageStim(
    win=win,
    name='image_prueba_2', 
    image='imagenes/jabon.jpg', mask=None,
    ori=0, pos=(0, 0.2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
slider_prueba_2 = visual.Slider(win=win, name='slider_prueba_2',
    size=(1.0, 0.05), pos=(0, -0.3), units=None,
    labels=("0","1000","2000","3000","4000","5000"), ticks=(1, 2, 3, 4, 5, 6),
    granularity=0, style=['whiteOnBlack'],
    color='DimGrey', font='HelveticaBold',
    flip=False, depth=-2)

# Initialize components for Routine "intro_experimento"
intro_experimentoClock = core.Clock()
text_prueba_2 = visual.TextStim(win=win, name='text_prueba_2',
    text='Han acabado las rondas de entrenamiento.\n\nA continuación, empezarán las rondas del juego',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
boton_intro_exp = visual.Polygon(
    win=win, name='boton_intro_exp',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_intro_exp = event.Mouse(win=win)
x, y = [None, None]
mouse_intro_exp.mouseClock = core.Clock()

# Initialize components for Routine "experimento"
experimentoClock = core.Clock()
sonido_exp = sound.Sound('A', secs=1, stereo=True, hamming=True,
    name='sonido_exp')
sonido_exp.setVolume(1.0)
image_exp = visual.ImageStim(
    win=win,
    name='image_exp', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
slider_exp = visual.Slider(win=win, name='slider_exp',
    size=(1.0, 0.05), pos=(0, -0.3), units=None,
    labels=("0","1000","2000","3000","4000","5000"), ticks=(1, 2, 3, 4, 5, 6),
    granularity=0, style=['whiteOnBlack'],
    color='DimGrey', font='HelveticaBold',
    flip=False, depth=-2)
nuestro_slider=[]
image_slider=[]


# Initialize components for Routine "subasta1"
subasta1Clock = core.Clock()
text_subasta1 = visual.TextStim(win=win, name='text_subasta1',
    text='Ahora realizará una subasta. \n\nUsted en este momento posee 20.000 pesos\n\nEsta subasta consiste en comparar una de las valoraciones que usted dio por uno de los artículos, escogida de forma aleatoria, con una respuesta generada aleatoriamente por la computadora.\n\n',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
boton_subasta1 = visual.Polygon(
    win=win, name='boton_subasta1',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_subasta1 = event.Mouse(win=win)
x, y = [None, None]
mouse_subasta1.mouseClock = core.Clock()

# Initialize components for Routine "subasta2"
subasta2Clock = core.Clock()
text_subasta2 = visual.TextStim(win=win, name='text_subasta2',
    text='Si la valoración que usted dio es MAYOR a la respuesta que genere la computadora, se le entregará el producto por el cuál realizó esa valoración y se le entregará el resultado de la resta de los 20.000 pesos y el valor del producto.\n\nSi la valoración que usted dio es MENOR a la respuesta que genere la computadora, se le entregarán los 20.000 pesos que tenía inicialmente.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
boton_subasta2 = visual.Polygon(
    win=win, name='boton_subasta2',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_subasta2 = event.Mouse(win=win)
x, y = [None, None]
mouse_subasta2.mouseClock = core.Clock()

# Initialize components for Routine "pago1"
pago1Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='default text',
    font='Arial',
    pos=(0, 0.15), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
boton_pago1 = visual.Polygon(
    win=win, name='boton_pago1',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_pago1 = event.Mouse(win=win)
x, y = [None, None]
mouse_pago1.mouseClock = core.Clock()

# Initialize components for Routine "pago2"
pago2Clock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
boton_pago2 = visual.Polygon(
    win=win, name='boton_pago2',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_pago2 = event.Mouse(win=win)
x, y = [None, None]
mouse_pago2.mouseClock = core.Clock()

# Initialize components for Routine "producto"
productoClock = core.Clock()
text_producto = visual.TextStim(win=win, name='text_producto',
    text='El producto sobre el cual se realizó la subasta es:',
    font='Arial',
    pos=(0, 0.275), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
image = visual.ImageStim(
    win=win,
    name='image', 
    image='sin', mask=None,
    ori=0, pos=(0, -0.15), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
boton_producto = visual.Polygon(
    win=win, name='boton_producto',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_producto = event.Mouse(win=win)
x, y = [None, None]
mouse_producto.mouseClock = core.Clock()

# Initialize components for Routine "pago3"
pago3Clock = core.Clock()
texto_final = visual.TextStim(win=win, name='texto_final',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
boton_pago3 = visual.Polygon(
    win=win, name='boton_pago3',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_pago3 = event.Mouse(win=win)
x, y = [None, None]
mouse_pago3.mouseClock = core.Clock()

# Initialize components for Routine "intro_encuesta"
intro_encuestaClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Ha finalizado el juego de subasta.\n\nLe pediremos que de click en el botón rojo para acabar la sesión. A continuación aparecerá un mensaje "Thank you for your patience" seguido de un botón "Ok". \n\nPor favor, oprima el botón para ser redirigido a una encuesta que nos servirá en nuestro estudio.\n\nMuchas gracias por su participación en este juego.\n\n',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
boton_intro_encuesta = visual.Polygon(
    win=win, name='boton_intro_encuesta',
    edges=100, size=(0.3, 0.2),
    ori=0, pos=(0.7, -0.4),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_intro_encuesta = event.Mouse(win=win)
x, y = [None, None]
mouse_intro_encuesta.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "intro"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_intro
mouse_intro.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
introComponents = [mensaje_intro, boton_intro, mouse_intro]
for thisComponent in introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=introClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *mensaje_intro* updates
    if mensaje_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mensaje_intro.frameNStart = frameN  # exact frame index
        mensaje_intro.tStart = t  # local t and not account for scr refresh
        mensaje_intro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mensaje_intro, 'tStartRefresh')  # time at next scr refresh
        mensaje_intro.setAutoDraw(True)
    if mensaje_intro.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mensaje_intro.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mensaje_intro.tStop = t  # not accounting for scr refresh
            mensaje_intro.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mensaje_intro, 'tStopRefresh')  # time at next scr refresh
            mensaje_intro.setAutoDraw(False)
    
    # *boton_intro* updates
    if boton_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_intro.frameNStart = frameN  # exact frame index
        boton_intro.tStart = t  # local t and not account for scr refresh
        boton_intro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_intro, 'tStartRefresh')  # time at next scr refresh
        boton_intro.setAutoDraw(True)
    if boton_intro.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_intro.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_intro.tStop = t  # not accounting for scr refresh
            boton_intro.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_intro, 'tStopRefresh')  # time at next scr refresh
            boton_intro.setAutoDraw(False)
    # *mouse_intro* updates
    if mouse_intro.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_intro.frameNStart = frameN  # exact frame index
        mouse_intro.tStart = t  # local t and not account for scr refresh
        mouse_intro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_intro, 'tStartRefresh')  # time at next scr refresh
        mouse_intro.status = STARTED
        mouse_intro.mouseClock.reset()
        prevButtonState = mouse_intro.getPressed()  # if button is down already this ISN'T a new click
    if mouse_intro.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_intro.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_intro.tStop = t  # not accounting for scr refresh
            mouse_intro.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_intro, 'tStopRefresh')  # time at next scr refresh
            mouse_intro.status = FINISHED
    if mouse_intro.status == STARTED:  # only update if started and not finished!
        buttons = mouse_intro.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_intro)]:
                    if obj.contains(mouse_intro):
                        gotValidClick = True
                        mouse_intro.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro"-------
for thisComponent in introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('mensaje_intro.started', mensaje_intro.tStartRefresh)
thisExp.addData('mensaje_intro.stopped', mensaje_intro.tStopRefresh)
thisExp.addData('boton_intro.started', boton_intro.tStartRefresh)
thisExp.addData('boton_intro.stopped', boton_intro.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_intro.getPos()
buttons = mouse_intro.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_intro)]:
        if obj.contains(mouse_intro):
            gotValidClick = True
            mouse_intro.clicked_name.append(obj.name)
thisExp.addData('mouse_intro.x', x)
thisExp.addData('mouse_intro.y', y)
thisExp.addData('mouse_intro.leftButton', buttons[0])
thisExp.addData('mouse_intro.midButton', buttons[1])
thisExp.addData('mouse_intro.rightButton', buttons[2])
if len(mouse_intro.clicked_name):
    thisExp.addData('mouse_intro.clicked_name', mouse_intro.clicked_name[0])
thisExp.addData('mouse_intro.started', mouse_intro.tStart)
thisExp.addData('mouse_intro.stopped', mouse_intro.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "intro_2"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_intro_2
mouse_intro_2.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
intro_2Components = [mensaje_intro_2, boton_intro_2, mouse_intro_2]
for thisComponent in intro_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
intro_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro_2"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = intro_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=intro_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *mensaje_intro_2* updates
    if mensaje_intro_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mensaje_intro_2.frameNStart = frameN  # exact frame index
        mensaje_intro_2.tStart = t  # local t and not account for scr refresh
        mensaje_intro_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mensaje_intro_2, 'tStartRefresh')  # time at next scr refresh
        mensaje_intro_2.setAutoDraw(True)
    if mensaje_intro_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mensaje_intro_2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mensaje_intro_2.tStop = t  # not accounting for scr refresh
            mensaje_intro_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mensaje_intro_2, 'tStopRefresh')  # time at next scr refresh
            mensaje_intro_2.setAutoDraw(False)
    
    # *boton_intro_2* updates
    if boton_intro_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_intro_2.frameNStart = frameN  # exact frame index
        boton_intro_2.tStart = t  # local t and not account for scr refresh
        boton_intro_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_intro_2, 'tStartRefresh')  # time at next scr refresh
        boton_intro_2.setAutoDraw(True)
    if boton_intro_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_intro_2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_intro_2.tStop = t  # not accounting for scr refresh
            boton_intro_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_intro_2, 'tStopRefresh')  # time at next scr refresh
            boton_intro_2.setAutoDraw(False)
    # *mouse_intro_2* updates
    if mouse_intro_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_intro_2.frameNStart = frameN  # exact frame index
        mouse_intro_2.tStart = t  # local t and not account for scr refresh
        mouse_intro_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_intro_2, 'tStartRefresh')  # time at next scr refresh
        mouse_intro_2.status = STARTED
        mouse_intro_2.mouseClock.reset()
        prevButtonState = mouse_intro_2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_intro_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_intro_2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_intro_2.tStop = t  # not accounting for scr refresh
            mouse_intro_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_intro_2, 'tStopRefresh')  # time at next scr refresh
            mouse_intro_2.status = FINISHED
    if mouse_intro_2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_intro_2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_intro_2)]:
                    if obj.contains(mouse_intro_2):
                        gotValidClick = True
                        mouse_intro_2.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_2"-------
for thisComponent in intro_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('mensaje_intro_2.started', mensaje_intro_2.tStartRefresh)
thisExp.addData('mensaje_intro_2.stopped', mensaje_intro_2.tStopRefresh)
thisExp.addData('boton_intro_2.started', boton_intro_2.tStartRefresh)
thisExp.addData('boton_intro_2.stopped', boton_intro_2.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_intro_2.getPos()
buttons = mouse_intro_2.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_intro_2)]:
        if obj.contains(mouse_intro_2):
            gotValidClick = True
            mouse_intro_2.clicked_name.append(obj.name)
thisExp.addData('mouse_intro_2.x', x)
thisExp.addData('mouse_intro_2.y', y)
thisExp.addData('mouse_intro_2.leftButton', buttons[0])
thisExp.addData('mouse_intro_2.midButton', buttons[1])
thisExp.addData('mouse_intro_2.rightButton', buttons[2])
if len(mouse_intro_2.clicked_name):
    thisExp.addData('mouse_intro_2.clicked_name', mouse_intro_2.clicked_name[0])
thisExp.addData('mouse_intro_2.started', mouse_intro_2.tStart)
thisExp.addData('mouse_intro_2.stopped', mouse_intro_2.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "intro_prueba"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_intro_prueba
mouse_intro_prueba.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
intro_pruebaComponents = [text_prueba, boton_intro_prueba, mouse_intro_prueba]
for thisComponent in intro_pruebaComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
intro_pruebaClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro_prueba"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = intro_pruebaClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=intro_pruebaClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_prueba* updates
    if text_prueba.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_prueba.frameNStart = frameN  # exact frame index
        text_prueba.tStart = t  # local t and not account for scr refresh
        text_prueba.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_prueba, 'tStartRefresh')  # time at next scr refresh
        text_prueba.setAutoDraw(True)
    if text_prueba.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_prueba.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            text_prueba.tStop = t  # not accounting for scr refresh
            text_prueba.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_prueba, 'tStopRefresh')  # time at next scr refresh
            text_prueba.setAutoDraw(False)
    
    # *boton_intro_prueba* updates
    if boton_intro_prueba.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_intro_prueba.frameNStart = frameN  # exact frame index
        boton_intro_prueba.tStart = t  # local t and not account for scr refresh
        boton_intro_prueba.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_intro_prueba, 'tStartRefresh')  # time at next scr refresh
        boton_intro_prueba.setAutoDraw(True)
    if boton_intro_prueba.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_intro_prueba.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_intro_prueba.tStop = t  # not accounting for scr refresh
            boton_intro_prueba.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_intro_prueba, 'tStopRefresh')  # time at next scr refresh
            boton_intro_prueba.setAutoDraw(False)
    # *mouse_intro_prueba* updates
    if mouse_intro_prueba.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_intro_prueba.frameNStart = frameN  # exact frame index
        mouse_intro_prueba.tStart = t  # local t and not account for scr refresh
        mouse_intro_prueba.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_intro_prueba, 'tStartRefresh')  # time at next scr refresh
        mouse_intro_prueba.status = STARTED
        mouse_intro_prueba.mouseClock.reset()
        prevButtonState = mouse_intro_prueba.getPressed()  # if button is down already this ISN'T a new click
    if mouse_intro_prueba.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_intro_prueba.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_intro_prueba.tStop = t  # not accounting for scr refresh
            mouse_intro_prueba.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_intro_prueba, 'tStopRefresh')  # time at next scr refresh
            mouse_intro_prueba.status = FINISHED
    if mouse_intro_prueba.status == STARTED:  # only update if started and not finished!
        buttons = mouse_intro_prueba.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_intro_prueba)]:
                    if obj.contains(mouse_intro_prueba):
                        gotValidClick = True
                        mouse_intro_prueba.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_pruebaComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_prueba"-------
for thisComponent in intro_pruebaComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_prueba.started', text_prueba.tStartRefresh)
thisExp.addData('text_prueba.stopped', text_prueba.tStopRefresh)
thisExp.addData('boton_intro_prueba.started', boton_intro_prueba.tStartRefresh)
thisExp.addData('boton_intro_prueba.stopped', boton_intro_prueba.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_intro_prueba.getPos()
buttons = mouse_intro_prueba.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_intro_prueba)]:
        if obj.contains(mouse_intro_prueba):
            gotValidClick = True
            mouse_intro_prueba.clicked_name.append(obj.name)
thisExp.addData('mouse_intro_prueba.x', x)
thisExp.addData('mouse_intro_prueba.y', y)
thisExp.addData('mouse_intro_prueba.leftButton', buttons[0])
thisExp.addData('mouse_intro_prueba.midButton', buttons[1])
thisExp.addData('mouse_intro_prueba.rightButton', buttons[2])
if len(mouse_intro_prueba.clicked_name):
    thisExp.addData('mouse_intro_prueba.clicked_name', mouse_intro_prueba.clicked_name[0])
thisExp.addData('mouse_intro_prueba.started', mouse_intro_prueba.tStart)
thisExp.addData('mouse_intro_prueba.stopped', mouse_intro_prueba.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "prueba_1"-------
continueRoutine = True
routineTimer.add(2.000000)
# update component parameters for each repeat
sonido_prueba.setSound('800', secs=1, hamming=True)
sonido_prueba.setVolume(0.02, log=False)
slider_prueba.reset()
# keep track of which components have finished
prueba_1Components = [sonido_prueba, image_prueba, slider_prueba]
for thisComponent in prueba_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
prueba_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "prueba_1"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = prueba_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=prueba_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # start/stop sonido_prueba
    if sonido_prueba.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sonido_prueba.frameNStart = frameN  # exact frame index
        sonido_prueba.tStart = t  # local t and not account for scr refresh
        sonido_prueba.tStartRefresh = tThisFlipGlobal  # on global time
        sonido_prueba.play(when=win)  # sync with win flip
    if sonido_prueba.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sonido_prueba.tStartRefresh + 1-frameTolerance:
            # keep track of stop time/frame for later
            sonido_prueba.tStop = t  # not accounting for scr refresh
            sonido_prueba.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sonido_prueba, 'tStopRefresh')  # time at next scr refresh
            sonido_prueba.stop()
    
    # *image_prueba* updates
    if image_prueba.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        image_prueba.frameNStart = frameN  # exact frame index
        image_prueba.tStart = t  # local t and not account for scr refresh
        image_prueba.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_prueba, 'tStartRefresh')  # time at next scr refresh
        image_prueba.setAutoDraw(True)
    if image_prueba.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_prueba.tStartRefresh + 1-frameTolerance:
            # keep track of stop time/frame for later
            image_prueba.tStop = t  # not accounting for scr refresh
            image_prueba.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_prueba, 'tStopRefresh')  # time at next scr refresh
            image_prueba.setAutoDraw(False)
    
    # *slider_prueba* updates
    if slider_prueba.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        slider_prueba.frameNStart = frameN  # exact frame index
        slider_prueba.tStart = t  # local t and not account for scr refresh
        slider_prueba.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_prueba, 'tStartRefresh')  # time at next scr refresh
        slider_prueba.setAutoDraw(True)
    if slider_prueba.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > slider_prueba.tStartRefresh + 1-frameTolerance:
            # keep track of stop time/frame for later
            slider_prueba.tStop = t  # not accounting for scr refresh
            slider_prueba.frameNStop = frameN  # exact frame index
            win.timeOnFlip(slider_prueba, 'tStopRefresh')  # time at next scr refresh
            slider_prueba.setAutoDraw(False)
    
    # Check slider_prueba for response to end routine
    if slider_prueba.getRating() is not None and slider_prueba.status == STARTED:
        continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in prueba_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "prueba_1"-------
for thisComponent in prueba_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
sonido_prueba.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sonido_prueba.started', sonido_prueba.tStartRefresh)
thisExp.addData('sonido_prueba.stopped', sonido_prueba.tStopRefresh)
thisExp.addData('image_prueba.started', image_prueba.tStartRefresh)
thisExp.addData('image_prueba.stopped', image_prueba.tStopRefresh)
thisExp.addData('slider_prueba.response', slider_prueba.getRating())
thisExp.addData('slider_prueba.rt', slider_prueba.getRT())
thisExp.addData('slider_prueba.started', slider_prueba.tStartRefresh)
thisExp.addData('slider_prueba.stopped', slider_prueba.tStopRefresh)

# ------Prepare to start Routine "prueba_2"-------
continueRoutine = True
routineTimer.add(2.000000)
# update component parameters for each repeat
sonido_prueba_2.setSound('800', secs=1, hamming=True)
sonido_prueba_2.setVolume(0.02, log=False)
slider_prueba_2.reset()
# keep track of which components have finished
prueba_2Components = [sonido_prueba_2, image_prueba_2, slider_prueba_2]
for thisComponent in prueba_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
prueba_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "prueba_2"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = prueba_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=prueba_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # start/stop sonido_prueba_2
    if sonido_prueba_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sonido_prueba_2.frameNStart = frameN  # exact frame index
        sonido_prueba_2.tStart = t  # local t and not account for scr refresh
        sonido_prueba_2.tStartRefresh = tThisFlipGlobal  # on global time
        sonido_prueba_2.play(when=win)  # sync with win flip
    if sonido_prueba_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sonido_prueba_2.tStartRefresh + 1-frameTolerance:
            # keep track of stop time/frame for later
            sonido_prueba_2.tStop = t  # not accounting for scr refresh
            sonido_prueba_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sonido_prueba_2, 'tStopRefresh')  # time at next scr refresh
            sonido_prueba_2.stop()
    
    # *image_prueba_2* updates
    if image_prueba_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        image_prueba_2.frameNStart = frameN  # exact frame index
        image_prueba_2.tStart = t  # local t and not account for scr refresh
        image_prueba_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_prueba_2, 'tStartRefresh')  # time at next scr refresh
        image_prueba_2.setAutoDraw(True)
    if image_prueba_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_prueba_2.tStartRefresh + 1-frameTolerance:
            # keep track of stop time/frame for later
            image_prueba_2.tStop = t  # not accounting for scr refresh
            image_prueba_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_prueba_2, 'tStopRefresh')  # time at next scr refresh
            image_prueba_2.setAutoDraw(False)
    
    # *slider_prueba_2* updates
    if slider_prueba_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        slider_prueba_2.frameNStart = frameN  # exact frame index
        slider_prueba_2.tStart = t  # local t and not account for scr refresh
        slider_prueba_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_prueba_2, 'tStartRefresh')  # time at next scr refresh
        slider_prueba_2.setAutoDraw(True)
    if slider_prueba_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > slider_prueba_2.tStartRefresh + 1-frameTolerance:
            # keep track of stop time/frame for later
            slider_prueba_2.tStop = t  # not accounting for scr refresh
            slider_prueba_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(slider_prueba_2, 'tStopRefresh')  # time at next scr refresh
            slider_prueba_2.setAutoDraw(False)
    
    # Check slider_prueba_2 for response to end routine
    if slider_prueba_2.getRating() is not None and slider_prueba_2.status == STARTED:
        continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in prueba_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "prueba_2"-------
for thisComponent in prueba_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
sonido_prueba_2.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sonido_prueba_2.started', sonido_prueba_2.tStartRefresh)
thisExp.addData('sonido_prueba_2.stopped', sonido_prueba_2.tStopRefresh)
thisExp.addData('image_prueba_2.started', image_prueba_2.tStartRefresh)
thisExp.addData('image_prueba_2.stopped', image_prueba_2.tStopRefresh)
thisExp.addData('slider_prueba_2.response', slider_prueba_2.getRating())
thisExp.addData('slider_prueba_2.rt', slider_prueba_2.getRT())
thisExp.addData('slider_prueba_2.started', slider_prueba_2.tStartRefresh)
thisExp.addData('slider_prueba_2.stopped', slider_prueba_2.tStopRefresh)

# ------Prepare to start Routine "intro_experimento"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_intro_exp
mouse_intro_exp.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
intro_experimentoComponents = [text_prueba_2, boton_intro_exp, mouse_intro_exp]
for thisComponent in intro_experimentoComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
intro_experimentoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro_experimento"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = intro_experimentoClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=intro_experimentoClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_prueba_2* updates
    if text_prueba_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_prueba_2.frameNStart = frameN  # exact frame index
        text_prueba_2.tStart = t  # local t and not account for scr refresh
        text_prueba_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_prueba_2, 'tStartRefresh')  # time at next scr refresh
        text_prueba_2.setAutoDraw(True)
    if text_prueba_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_prueba_2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            text_prueba_2.tStop = t  # not accounting for scr refresh
            text_prueba_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_prueba_2, 'tStopRefresh')  # time at next scr refresh
            text_prueba_2.setAutoDraw(False)
    
    # *boton_intro_exp* updates
    if boton_intro_exp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_intro_exp.frameNStart = frameN  # exact frame index
        boton_intro_exp.tStart = t  # local t and not account for scr refresh
        boton_intro_exp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_intro_exp, 'tStartRefresh')  # time at next scr refresh
        boton_intro_exp.setAutoDraw(True)
    if boton_intro_exp.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_intro_exp.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_intro_exp.tStop = t  # not accounting for scr refresh
            boton_intro_exp.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_intro_exp, 'tStopRefresh')  # time at next scr refresh
            boton_intro_exp.setAutoDraw(False)
    # *mouse_intro_exp* updates
    if mouse_intro_exp.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_intro_exp.frameNStart = frameN  # exact frame index
        mouse_intro_exp.tStart = t  # local t and not account for scr refresh
        mouse_intro_exp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_intro_exp, 'tStartRefresh')  # time at next scr refresh
        mouse_intro_exp.status = STARTED
        mouse_intro_exp.mouseClock.reset()
        prevButtonState = mouse_intro_exp.getPressed()  # if button is down already this ISN'T a new click
    if mouse_intro_exp.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_intro_exp.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_intro_exp.tStop = t  # not accounting for scr refresh
            mouse_intro_exp.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_intro_exp, 'tStopRefresh')  # time at next scr refresh
            mouse_intro_exp.status = FINISHED
    if mouse_intro_exp.status == STARTED:  # only update if started and not finished!
        buttons = mouse_intro_exp.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_intro_exp)]:
                    if obj.contains(mouse_intro_exp):
                        gotValidClick = True
                        mouse_intro_exp.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_experimentoComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_experimento"-------
for thisComponent in intro_experimentoComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_prueba_2.started', text_prueba_2.tStartRefresh)
thisExp.addData('text_prueba_2.stopped', text_prueba_2.tStopRefresh)
thisExp.addData('boton_intro_exp.started', boton_intro_exp.tStartRefresh)
thisExp.addData('boton_intro_exp.stopped', boton_intro_exp.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_intro_exp.getPos()
buttons = mouse_intro_exp.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_intro_exp)]:
        if obj.contains(mouse_intro_exp):
            gotValidClick = True
            mouse_intro_exp.clicked_name.append(obj.name)
thisExp.addData('mouse_intro_exp.x', x)
thisExp.addData('mouse_intro_exp.y', y)
thisExp.addData('mouse_intro_exp.leftButton', buttons[0])
thisExp.addData('mouse_intro_exp.midButton', buttons[1])
thisExp.addData('mouse_intro_exp.rightButton', buttons[2])
if len(mouse_intro_exp.clicked_name):
    thisExp.addData('mouse_intro_exp.clicked_name', mouse_intro_exp.clicked_name[0])
thisExp.addData('mouse_intro_exp.started', mouse_intro_exp.tStart)
thisExp.addData('mouse_intro_exp.stopped', mouse_intro_exp.tStop)
thisExp.nextEntry()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('ruidos.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials_2 = data.TrialHandler(nReps=1, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('imagenes.xlsx'),
        seed=None, name='trials_2')
    thisExp.addLoop(trials_2)  # add the loop to the experiment
    thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    for thisTrial_2 in trials_2:
        currentLoop = trials_2
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                exec('{} = thisTrial_2[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "experimento"-------
        continueRoutine = True
        routineTimer.add(2.000000)
        # update component parameters for each repeat
        sonido_exp.setSound(Hertz, secs=1, hamming=True)
        sonido_exp.setVolume(volumen, log=False)
        image_exp.setImage(Imagenes)
        slider_exp.reset()
        # keep track of which components have finished
        experimentoComponents = [sonido_exp, image_exp, slider_exp]
        for thisComponent in experimentoComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        experimentoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "experimento"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = experimentoClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=experimentoClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # start/stop sonido_exp
            if sonido_exp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sonido_exp.frameNStart = frameN  # exact frame index
                sonido_exp.tStart = t  # local t and not account for scr refresh
                sonido_exp.tStartRefresh = tThisFlipGlobal  # on global time
                sonido_exp.play(when=win)  # sync with win flip
            if sonido_exp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sonido_exp.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    sonido_exp.tStop = t  # not accounting for scr refresh
                    sonido_exp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(sonido_exp, 'tStopRefresh')  # time at next scr refresh
                    sonido_exp.stop()
            
            # *image_exp* updates
            if image_exp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                # keep track of start time/frame for later
                image_exp.frameNStart = frameN  # exact frame index
                image_exp.tStart = t  # local t and not account for scr refresh
                image_exp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_exp, 'tStartRefresh')  # time at next scr refresh
                image_exp.setAutoDraw(True)
            if image_exp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_exp.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_exp.tStop = t  # not accounting for scr refresh
                    image_exp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_exp, 'tStopRefresh')  # time at next scr refresh
                    image_exp.setAutoDraw(False)
            
            # *slider_exp* updates
            if slider_exp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                # keep track of start time/frame for later
                slider_exp.frameNStart = frameN  # exact frame index
                slider_exp.tStart = t  # local t and not account for scr refresh
                slider_exp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(slider_exp, 'tStartRefresh')  # time at next scr refresh
                slider_exp.setAutoDraw(True)
            if slider_exp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > slider_exp.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    slider_exp.tStop = t  # not accounting for scr refresh
                    slider_exp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(slider_exp, 'tStopRefresh')  # time at next scr refresh
                    slider_exp.setAutoDraw(False)
            
            # Check slider_exp for response to end routine
            if slider_exp.getRating() is not None and slider_exp.status == STARTED:
                continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in experimentoComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "experimento"-------
        for thisComponent in experimentoComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        sonido_exp.stop()  # ensure sound has stopped at end of routine
        trials_2.addData('sonido_exp.started', sonido_exp.tStartRefresh)
        trials_2.addData('sonido_exp.stopped', sonido_exp.tStopRefresh)
        trials_2.addData('image_exp.started', image_exp.tStartRefresh)
        trials_2.addData('image_exp.stopped', image_exp.tStopRefresh)
        trials_2.addData('slider_exp.response', slider_exp.getRating())
        trials_2.addData('slider_exp.rt', slider_exp.getRT())
        trials_2.addData('slider_exp.started', slider_exp.tStartRefresh)
        trials_2.addData('slider_exp.stopped', slider_exp.tStopRefresh)
        rating=slider_exp.getRating()
        Imagenes1=Imagenes
        nuestro_slider.append(rating)
        image_slider.append(Imagenes1)
        
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials_2'
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "subasta1"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_subasta1
mouse_subasta1.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
subasta1Components = [text_subasta1, boton_subasta1, mouse_subasta1]
for thisComponent in subasta1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
subasta1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "subasta1"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = subasta1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=subasta1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_subasta1* updates
    if text_subasta1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_subasta1.frameNStart = frameN  # exact frame index
        text_subasta1.tStart = t  # local t and not account for scr refresh
        text_subasta1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_subasta1, 'tStartRefresh')  # time at next scr refresh
        text_subasta1.setAutoDraw(True)
    if text_subasta1.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_subasta1.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            text_subasta1.tStop = t  # not accounting for scr refresh
            text_subasta1.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_subasta1, 'tStopRefresh')  # time at next scr refresh
            text_subasta1.setAutoDraw(False)
    
    # *boton_subasta1* updates
    if boton_subasta1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_subasta1.frameNStart = frameN  # exact frame index
        boton_subasta1.tStart = t  # local t and not account for scr refresh
        boton_subasta1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_subasta1, 'tStartRefresh')  # time at next scr refresh
        boton_subasta1.setAutoDraw(True)
    if boton_subasta1.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_subasta1.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_subasta1.tStop = t  # not accounting for scr refresh
            boton_subasta1.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_subasta1, 'tStopRefresh')  # time at next scr refresh
            boton_subasta1.setAutoDraw(False)
    # *mouse_subasta1* updates
    if mouse_subasta1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_subasta1.frameNStart = frameN  # exact frame index
        mouse_subasta1.tStart = t  # local t and not account for scr refresh
        mouse_subasta1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_subasta1, 'tStartRefresh')  # time at next scr refresh
        mouse_subasta1.status = STARTED
        mouse_subasta1.mouseClock.reset()
        prevButtonState = mouse_subasta1.getPressed()  # if button is down already this ISN'T a new click
    if mouse_subasta1.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_subasta1.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_subasta1.tStop = t  # not accounting for scr refresh
            mouse_subasta1.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_subasta1, 'tStopRefresh')  # time at next scr refresh
            mouse_subasta1.status = FINISHED
    if mouse_subasta1.status == STARTED:  # only update if started and not finished!
        buttons = mouse_subasta1.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_subasta1)]:
                    if obj.contains(mouse_subasta1):
                        gotValidClick = True
                        mouse_subasta1.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in subasta1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "subasta1"-------
for thisComponent in subasta1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_subasta1.started', text_subasta1.tStartRefresh)
thisExp.addData('text_subasta1.stopped', text_subasta1.tStopRefresh)
thisExp.addData('boton_subasta1.started', boton_subasta1.tStartRefresh)
thisExp.addData('boton_subasta1.stopped', boton_subasta1.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_subasta1.getPos()
buttons = mouse_subasta1.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_subasta1)]:
        if obj.contains(mouse_subasta1):
            gotValidClick = True
            mouse_subasta1.clicked_name.append(obj.name)
thisExp.addData('mouse_subasta1.x', x)
thisExp.addData('mouse_subasta1.y', y)
thisExp.addData('mouse_subasta1.leftButton', buttons[0])
thisExp.addData('mouse_subasta1.midButton', buttons[1])
thisExp.addData('mouse_subasta1.rightButton', buttons[2])
if len(mouse_subasta1.clicked_name):
    thisExp.addData('mouse_subasta1.clicked_name', mouse_subasta1.clicked_name[0])
thisExp.addData('mouse_subasta1.started', mouse_subasta1.tStart)
thisExp.addData('mouse_subasta1.stopped', mouse_subasta1.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "subasta2"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_subasta2
mouse_subasta2.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
subasta2Components = [text_subasta2, boton_subasta2, mouse_subasta2]
for thisComponent in subasta2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
subasta2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "subasta2"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = subasta2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=subasta2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_subasta2* updates
    if text_subasta2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_subasta2.frameNStart = frameN  # exact frame index
        text_subasta2.tStart = t  # local t and not account for scr refresh
        text_subasta2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_subasta2, 'tStartRefresh')  # time at next scr refresh
        text_subasta2.setAutoDraw(True)
    if text_subasta2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_subasta2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            text_subasta2.tStop = t  # not accounting for scr refresh
            text_subasta2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_subasta2, 'tStopRefresh')  # time at next scr refresh
            text_subasta2.setAutoDraw(False)
    
    # *boton_subasta2* updates
    if boton_subasta2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_subasta2.frameNStart = frameN  # exact frame index
        boton_subasta2.tStart = t  # local t and not account for scr refresh
        boton_subasta2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_subasta2, 'tStartRefresh')  # time at next scr refresh
        boton_subasta2.setAutoDraw(True)
    if boton_subasta2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_subasta2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_subasta2.tStop = t  # not accounting for scr refresh
            boton_subasta2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_subasta2, 'tStopRefresh')  # time at next scr refresh
            boton_subasta2.setAutoDraw(False)
    # *mouse_subasta2* updates
    if mouse_subasta2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_subasta2.frameNStart = frameN  # exact frame index
        mouse_subasta2.tStart = t  # local t and not account for scr refresh
        mouse_subasta2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_subasta2, 'tStartRefresh')  # time at next scr refresh
        mouse_subasta2.status = STARTED
        mouse_subasta2.mouseClock.reset()
        prevButtonState = mouse_subasta2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_subasta2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_subasta2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_subasta2.tStop = t  # not accounting for scr refresh
            mouse_subasta2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_subasta2, 'tStopRefresh')  # time at next scr refresh
            mouse_subasta2.status = FINISHED
    if mouse_subasta2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_subasta2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_subasta2)]:
                    if obj.contains(mouse_subasta2):
                        gotValidClick = True
                        mouse_subasta2.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in subasta2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "subasta2"-------
for thisComponent in subasta2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_subasta2.started', text_subasta2.tStartRefresh)
thisExp.addData('text_subasta2.stopped', text_subasta2.tStopRefresh)
thisExp.addData('boton_subasta2.started', boton_subasta2.tStartRefresh)
thisExp.addData('boton_subasta2.stopped', boton_subasta2.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_subasta2.getPos()
buttons = mouse_subasta2.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_subasta2)]:
        if obj.contains(mouse_subasta2):
            gotValidClick = True
            mouse_subasta2.clicked_name.append(obj.name)
thisExp.addData('mouse_subasta2.x', x)
thisExp.addData('mouse_subasta2.y', y)
thisExp.addData('mouse_subasta2.leftButton', buttons[0])
thisExp.addData('mouse_subasta2.midButton', buttons[1])
thisExp.addData('mouse_subasta2.rightButton', buttons[2])
if len(mouse_subasta2.clicked_name):
    thisExp.addData('mouse_subasta2.clicked_name', mouse_subasta2.clicked_name[0])
thisExp.addData('mouse_subasta2.started', mouse_subasta2.tStart)
thisExp.addData('mouse_subasta2.stopped', mouse_subasta2.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "pago1"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
import random
n_precio_aleatorio = random.random()
precio_aleatorio= round(n_precio_aleatorio*5000)
mensaje_precio_aleatorio = f"El número generado aleatoriamente por la computadora es {precio_aleatorio}."
text.setText(mensaje_precio_aleatorio)
# setup some python lists for storing info about the mouse_pago1
mouse_pago1.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
pago1Components = [text, boton_pago1, mouse_pago1]
for thisComponent in pago1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
pago1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "pago1"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = pago1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=pago1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    if text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            text.tStop = t  # not accounting for scr refresh
            text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
            text.setAutoDraw(False)
    
    # *boton_pago1* updates
    if boton_pago1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_pago1.frameNStart = frameN  # exact frame index
        boton_pago1.tStart = t  # local t and not account for scr refresh
        boton_pago1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_pago1, 'tStartRefresh')  # time at next scr refresh
        boton_pago1.setAutoDraw(True)
    if boton_pago1.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_pago1.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_pago1.tStop = t  # not accounting for scr refresh
            boton_pago1.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_pago1, 'tStopRefresh')  # time at next scr refresh
            boton_pago1.setAutoDraw(False)
    # *mouse_pago1* updates
    if mouse_pago1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_pago1.frameNStart = frameN  # exact frame index
        mouse_pago1.tStart = t  # local t and not account for scr refresh
        mouse_pago1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_pago1, 'tStartRefresh')  # time at next scr refresh
        mouse_pago1.status = STARTED
        mouse_pago1.mouseClock.reset()
        prevButtonState = mouse_pago1.getPressed()  # if button is down already this ISN'T a new click
    if mouse_pago1.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_pago1.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_pago1.tStop = t  # not accounting for scr refresh
            mouse_pago1.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_pago1, 'tStopRefresh')  # time at next scr refresh
            mouse_pago1.status = FINISHED
    if mouse_pago1.status == STARTED:  # only update if started and not finished!
        buttons = mouse_pago1.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_pago1)]:
                    if obj.contains(mouse_pago1):
                        gotValidClick = True
                        mouse_pago1.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in pago1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "pago1"-------
for thisComponent in pago1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
thisExp.addData('boton_pago1.started', boton_pago1.tStartRefresh)
thisExp.addData('boton_pago1.stopped', boton_pago1.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_pago1.getPos()
buttons = mouse_pago1.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_pago1)]:
        if obj.contains(mouse_pago1):
            gotValidClick = True
            mouse_pago1.clicked_name.append(obj.name)
thisExp.addData('mouse_pago1.x', x)
thisExp.addData('mouse_pago1.y', y)
thisExp.addData('mouse_pago1.leftButton', buttons[0])
thisExp.addData('mouse_pago1.midButton', buttons[1])
thisExp.addData('mouse_pago1.rightButton', buttons[2])
if len(mouse_pago1.clicked_name):
    thisExp.addData('mouse_pago1.clicked_name', mouse_pago1.clicked_name[0])
thisExp.addData('mouse_pago1.started', mouse_pago1.tStart)
thisExp.addData('mouse_pago1.stopped', mouse_pago1.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "pago2"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
import random
n_precio_sujeto=random.random()
precio_sujeto_pos=round(n_precio_sujeto*len(nuestro_slider))
precio_sujeto=int(round((nuestro_slider[precio_sujeto_pos]*1000))-1000)
mensaje_precio_sujeto = f"El precio seleccionado aleatoriamente de sus respuestas es {precio_sujeto}."
imagen_estimulo= image_slider[precio_sujeto_pos]
text_4.setText(mensaje_precio_sujeto)
# setup some python lists for storing info about the mouse_pago2
mouse_pago2.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
pago2Components = [text_4, boton_pago2, mouse_pago2]
for thisComponent in pago2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
pago2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "pago2"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = pago2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=pago2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    if text_4.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_4.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            text_4.tStop = t  # not accounting for scr refresh
            text_4.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_4, 'tStopRefresh')  # time at next scr refresh
            text_4.setAutoDraw(False)
    
    # *boton_pago2* updates
    if boton_pago2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_pago2.frameNStart = frameN  # exact frame index
        boton_pago2.tStart = t  # local t and not account for scr refresh
        boton_pago2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_pago2, 'tStartRefresh')  # time at next scr refresh
        boton_pago2.setAutoDraw(True)
    if boton_pago2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_pago2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_pago2.tStop = t  # not accounting for scr refresh
            boton_pago2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_pago2, 'tStopRefresh')  # time at next scr refresh
            boton_pago2.setAutoDraw(False)
    # *mouse_pago2* updates
    if mouse_pago2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_pago2.frameNStart = frameN  # exact frame index
        mouse_pago2.tStart = t  # local t and not account for scr refresh
        mouse_pago2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_pago2, 'tStartRefresh')  # time at next scr refresh
        mouse_pago2.status = STARTED
        mouse_pago2.mouseClock.reset()
        prevButtonState = mouse_pago2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_pago2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_pago2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_pago2.tStop = t  # not accounting for scr refresh
            mouse_pago2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_pago2, 'tStopRefresh')  # time at next scr refresh
            mouse_pago2.status = FINISHED
    if mouse_pago2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_pago2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_pago2)]:
                    if obj.contains(mouse_pago2):
                        gotValidClick = True
                        mouse_pago2.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in pago2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "pago2"-------
for thisComponent in pago2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_4.started', text_4.tStartRefresh)
thisExp.addData('text_4.stopped', text_4.tStopRefresh)
thisExp.addData('boton_pago2.started', boton_pago2.tStartRefresh)
thisExp.addData('boton_pago2.stopped', boton_pago2.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_pago2.getPos()
buttons = mouse_pago2.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_pago2)]:
        if obj.contains(mouse_pago2):
            gotValidClick = True
            mouse_pago2.clicked_name.append(obj.name)
thisExp.addData('mouse_pago2.x', x)
thisExp.addData('mouse_pago2.y', y)
thisExp.addData('mouse_pago2.leftButton', buttons[0])
thisExp.addData('mouse_pago2.midButton', buttons[1])
thisExp.addData('mouse_pago2.rightButton', buttons[2])
if len(mouse_pago2.clicked_name):
    thisExp.addData('mouse_pago2.clicked_name', mouse_pago2.clicked_name[0])
thisExp.addData('mouse_pago2.started', mouse_pago2.tStart)
thisExp.addData('mouse_pago2.stopped', mouse_pago2.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "producto"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
image.setImage(imagen_estimulo)
# setup some python lists for storing info about the mouse_producto
mouse_producto.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
productoComponents = [text_producto, image, boton_producto, mouse_producto]
for thisComponent in productoComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
productoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "producto"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = productoClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=productoClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_producto* updates
    if text_producto.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_producto.frameNStart = frameN  # exact frame index
        text_producto.tStart = t  # local t and not account for scr refresh
        text_producto.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_producto, 'tStartRefresh')  # time at next scr refresh
        text_producto.setAutoDraw(True)
    if text_producto.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_producto.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            text_producto.tStop = t  # not accounting for scr refresh
            text_producto.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_producto, 'tStopRefresh')  # time at next scr refresh
            text_producto.setAutoDraw(False)
    
    # *image* updates
    if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image.frameNStart = frameN  # exact frame index
        image.tStart = t  # local t and not account for scr refresh
        image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
        image.setAutoDraw(True)
    if image.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            image.tStop = t  # not accounting for scr refresh
            image.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image, 'tStopRefresh')  # time at next scr refresh
            image.setAutoDraw(False)
    
    # *boton_producto* updates
    if boton_producto.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_producto.frameNStart = frameN  # exact frame index
        boton_producto.tStart = t  # local t and not account for scr refresh
        boton_producto.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_producto, 'tStartRefresh')  # time at next scr refresh
        boton_producto.setAutoDraw(True)
    if boton_producto.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_producto.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_producto.tStop = t  # not accounting for scr refresh
            boton_producto.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_producto, 'tStopRefresh')  # time at next scr refresh
            boton_producto.setAutoDraw(False)
    # *mouse_producto* updates
    if mouse_producto.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_producto.frameNStart = frameN  # exact frame index
        mouse_producto.tStart = t  # local t and not account for scr refresh
        mouse_producto.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_producto, 'tStartRefresh')  # time at next scr refresh
        mouse_producto.status = STARTED
        mouse_producto.mouseClock.reset()
        prevButtonState = mouse_producto.getPressed()  # if button is down already this ISN'T a new click
    if mouse_producto.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_producto.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_producto.tStop = t  # not accounting for scr refresh
            mouse_producto.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_producto, 'tStopRefresh')  # time at next scr refresh
            mouse_producto.status = FINISHED
    if mouse_producto.status == STARTED:  # only update if started and not finished!
        buttons = mouse_producto.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_producto)]:
                    if obj.contains(mouse_producto):
                        gotValidClick = True
                        mouse_producto.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in productoComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "producto"-------
for thisComponent in productoComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_producto.started', text_producto.tStartRefresh)
thisExp.addData('text_producto.stopped', text_producto.tStopRefresh)
thisExp.addData('image.started', image.tStartRefresh)
thisExp.addData('image.stopped', image.tStopRefresh)
thisExp.addData('boton_producto.started', boton_producto.tStartRefresh)
thisExp.addData('boton_producto.stopped', boton_producto.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_producto.getPos()
buttons = mouse_producto.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_producto)]:
        if obj.contains(mouse_producto):
            gotValidClick = True
            mouse_producto.clicked_name.append(obj.name)
thisExp.addData('mouse_producto.x', x)
thisExp.addData('mouse_producto.y', y)
thisExp.addData('mouse_producto.leftButton', buttons[0])
thisExp.addData('mouse_producto.midButton', buttons[1])
thisExp.addData('mouse_producto.rightButton', buttons[2])
if len(mouse_producto.clicked_name):
    thisExp.addData('mouse_producto.clicked_name', mouse_producto.clicked_name[0])
thisExp.addData('mouse_producto.started', mouse_producto.tStart)
thisExp.addData('mouse_producto.stopped', mouse_producto.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "pago3"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
diferencia=20000-precio_sujeto
print(diferencia)
if precio_sujeto > precio_aleatorio:
   mensaje1 = f"Usted ha ganado {diferencia} pesos y el producto por el cuál subastó"
else: 
    mensaje1 = f"Usted ha ganado 20.000 pesos"


texto_final.setText(mensaje1)
# setup some python lists for storing info about the mouse_pago3
mouse_pago3.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
pago3Components = [texto_final, boton_pago3, mouse_pago3]
for thisComponent in pago3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
pago3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "pago3"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = pago3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=pago3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *texto_final* updates
    if texto_final.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        texto_final.frameNStart = frameN  # exact frame index
        texto_final.tStart = t  # local t and not account for scr refresh
        texto_final.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(texto_final, 'tStartRefresh')  # time at next scr refresh
        texto_final.setAutoDraw(True)
    if texto_final.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > texto_final.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            texto_final.tStop = t  # not accounting for scr refresh
            texto_final.frameNStop = frameN  # exact frame index
            win.timeOnFlip(texto_final, 'tStopRefresh')  # time at next scr refresh
            texto_final.setAutoDraw(False)
    
    # *boton_pago3* updates
    if boton_pago3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_pago3.frameNStart = frameN  # exact frame index
        boton_pago3.tStart = t  # local t and not account for scr refresh
        boton_pago3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_pago3, 'tStartRefresh')  # time at next scr refresh
        boton_pago3.setAutoDraw(True)
    if boton_pago3.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_pago3.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_pago3.tStop = t  # not accounting for scr refresh
            boton_pago3.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_pago3, 'tStopRefresh')  # time at next scr refresh
            boton_pago3.setAutoDraw(False)
    # *mouse_pago3* updates
    if mouse_pago3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_pago3.frameNStart = frameN  # exact frame index
        mouse_pago3.tStart = t  # local t and not account for scr refresh
        mouse_pago3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_pago3, 'tStartRefresh')  # time at next scr refresh
        mouse_pago3.status = STARTED
        mouse_pago3.mouseClock.reset()
        prevButtonState = mouse_pago3.getPressed()  # if button is down already this ISN'T a new click
    if mouse_pago3.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_pago3.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_pago3.tStop = t  # not accounting for scr refresh
            mouse_pago3.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_pago3, 'tStopRefresh')  # time at next scr refresh
            mouse_pago3.status = FINISHED
    if mouse_pago3.status == STARTED:  # only update if started and not finished!
        buttons = mouse_pago3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_pago3)]:
                    if obj.contains(mouse_pago3):
                        gotValidClick = True
                        mouse_pago3.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in pago3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "pago3"-------
for thisComponent in pago3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('texto_final.started', texto_final.tStartRefresh)
thisExp.addData('texto_final.stopped', texto_final.tStopRefresh)
thisExp.addData('boton_pago3.started', boton_pago3.tStartRefresh)
thisExp.addData('boton_pago3.stopped', boton_pago3.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_pago3.getPos()
buttons = mouse_pago3.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_pago3)]:
        if obj.contains(mouse_pago3):
            gotValidClick = True
            mouse_pago3.clicked_name.append(obj.name)
thisExp.addData('mouse_pago3.x', x)
thisExp.addData('mouse_pago3.y', y)
thisExp.addData('mouse_pago3.leftButton', buttons[0])
thisExp.addData('mouse_pago3.midButton', buttons[1])
thisExp.addData('mouse_pago3.rightButton', buttons[2])
if len(mouse_pago3.clicked_name):
    thisExp.addData('mouse_pago3.clicked_name', mouse_pago3.clicked_name[0])
thisExp.addData('mouse_pago3.started', mouse_pago3.tStart)
thisExp.addData('mouse_pago3.stopped', mouse_pago3.tStop)
thisExp.nextEntry()

# ------Prepare to start Routine "intro_encuesta"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_intro_encuesta
mouse_intro_encuesta.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
intro_encuestaComponents = [text_2, boton_intro_encuesta, mouse_intro_encuesta]
for thisComponent in intro_encuestaComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
intro_encuestaClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro_encuesta"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = intro_encuestaClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=intro_encuestaClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    if text_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_2.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            text_2.tStop = t  # not accounting for scr refresh
            text_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
            text_2.setAutoDraw(False)
    
    # *boton_intro_encuesta* updates
    if boton_intro_encuesta.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        boton_intro_encuesta.frameNStart = frameN  # exact frame index
        boton_intro_encuesta.tStart = t  # local t and not account for scr refresh
        boton_intro_encuesta.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(boton_intro_encuesta, 'tStartRefresh')  # time at next scr refresh
        boton_intro_encuesta.setAutoDraw(True)
    if boton_intro_encuesta.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > boton_intro_encuesta.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            boton_intro_encuesta.tStop = t  # not accounting for scr refresh
            boton_intro_encuesta.frameNStop = frameN  # exact frame index
            win.timeOnFlip(boton_intro_encuesta, 'tStopRefresh')  # time at next scr refresh
            boton_intro_encuesta.setAutoDraw(False)
    # *mouse_intro_encuesta* updates
    if mouse_intro_encuesta.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_intro_encuesta.frameNStart = frameN  # exact frame index
        mouse_intro_encuesta.tStart = t  # local t and not account for scr refresh
        mouse_intro_encuesta.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_intro_encuesta, 'tStartRefresh')  # time at next scr refresh
        mouse_intro_encuesta.status = STARTED
        mouse_intro_encuesta.mouseClock.reset()
        prevButtonState = mouse_intro_encuesta.getPressed()  # if button is down already this ISN'T a new click
    if mouse_intro_encuesta.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > mouse_intro_encuesta.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            mouse_intro_encuesta.tStop = t  # not accounting for scr refresh
            mouse_intro_encuesta.frameNStop = frameN  # exact frame index
            win.timeOnFlip(mouse_intro_encuesta, 'tStopRefresh')  # time at next scr refresh
            mouse_intro_encuesta.status = FINISHED
    if mouse_intro_encuesta.status == STARTED:  # only update if started and not finished!
        buttons = mouse_intro_encuesta.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [(boton_intro_encuesta)]:
                    if obj.contains(mouse_intro_encuesta):
                        gotValidClick = True
                        mouse_intro_encuesta.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_encuestaComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_encuesta"-------
for thisComponent in intro_encuestaComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
thisExp.addData('boton_intro_encuesta.started', boton_intro_encuesta.tStartRefresh)
thisExp.addData('boton_intro_encuesta.stopped', boton_intro_encuesta.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_intro_encuesta.getPos()
buttons = mouse_intro_encuesta.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    for obj in [(boton_intro_encuesta)]:
        if obj.contains(mouse_intro_encuesta):
            gotValidClick = True
            mouse_intro_encuesta.clicked_name.append(obj.name)
thisExp.addData('mouse_intro_encuesta.x', x)
thisExp.addData('mouse_intro_encuesta.y', y)
thisExp.addData('mouse_intro_encuesta.leftButton', buttons[0])
thisExp.addData('mouse_intro_encuesta.midButton', buttons[1])
thisExp.addData('mouse_intro_encuesta.rightButton', buttons[2])
if len(mouse_intro_encuesta.clicked_name):
    thisExp.addData('mouse_intro_encuesta.clicked_name', mouse_intro_encuesta.clicked_name[0])
thisExp.addData('mouse_intro_encuesta.started', mouse_intro_encuesta.tStart)
thisExp.addData('mouse_intro_encuesta.stopped', mouse_intro_encuesta.tStop)
thisExp.nextEntry()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()

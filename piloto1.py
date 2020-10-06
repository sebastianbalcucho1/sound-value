#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.3),
    on septiembre 29, 2020, at 13:41
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

import random
n = random.random()
randn= round(n*5000)
message = f"El número aleatorio es {randn}."
print(message)



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.3'
expName = 'piloto1'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sort_keys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\LENOVO\\OneDrive\\Desktop\\sonico-master\\piloto1.py',
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
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
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

# Initialize components for Routine "Instrucciones"
InstruccionesClock = core.Clock()
sound_3 = sound.Sound('instr.ogg', secs=-1, stereo=True, hamming=True,
    name='sound_3')
sound_3.setVolume(1)

# Initialize components for Routine "grave"
graveClock = core.Clock()
Sonido = sound.Sound('A', secs=2, stereo=True, hamming=True,
    name='Sonido')
Sonido.setVolume(1.0)
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
slider_2 = visual.Slider(win=win, name='slider_2',
    size=(1.0, 0.05), pos=(0, -0.3), units=None,
    labels=("0","1000","2000","3000","4000","5000"), ticks=(1, 2, 3, 4, 5, 6),
    granularity=0, style=['rating'],
    color='LightGray', font='HelveticaBold',
    flip=False)

# Initialize components for Routine "Pago"
PagoClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text=message,
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "valor"
valorClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text=respuesta,
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instrucciones"-------
continueRoutine = True
# update component parameters for each repeat
sound_3.setSound('instr.ogg', hamming=True)
sound_3.setVolume(1, log=False)
# keep track of which components have finished
InstruccionesComponents = [sound_3]
for thisComponent in InstruccionesComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
InstruccionesClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instrucciones"-------
while continueRoutine:
    # get current time
    t = InstruccionesClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=InstruccionesClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # start/stop sound_3
    if sound_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_3.frameNStart = frameN  # exact frame index
        sound_3.tStart = t  # local t and not account for scr refresh
        sound_3.tStartRefresh = tThisFlipGlobal  # on global time
        sound_3.play(when=win)  # sync with win flip
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstruccionesComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instrucciones"-------
for thisComponent in InstruccionesComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
sound_3.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sound_3.started', sound_3.tStartRefresh)
thisExp.addData('sound_3.stopped', sound_3.tStopRefresh)
# the Routine "Instrucciones" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

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
        
        # ------Prepare to start Routine "grave"-------
        continueRoutine = True
        routineTimer.add(10.000000)
        # update component parameters for each repeat
        Sonido.setSound(Hertz, secs=2, hamming=True)
        Sonido.setVolume(volumen, log=False)
        image_2.setImage(Imagenes)
        slider_2.reset()
        # keep track of which components have finished
        graveComponents = [Sonido, image_2, slider_2]
        for thisComponent in graveComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        graveClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "grave"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = graveClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=graveClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # start/stop Sonido
            if Sonido.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Sonido.frameNStart = frameN  # exact frame index
                Sonido.tStart = t  # local t and not account for scr refresh
                Sonido.tStartRefresh = tThisFlipGlobal  # on global time
                Sonido.play(when=win)  # sync with win flip
            if Sonido.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Sonido.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    Sonido.tStop = t  # not accounting for scr refresh
                    Sonido.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Sonido, 'tStopRefresh')  # time at next scr refresh
                    Sonido.stop()
            
            # *image_2* updates
            if image_2.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                image_2.setAutoDraw(True)
            if image_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_2.tStartRefresh + 8-frameTolerance:
                    # keep track of stop time/frame for later
                    image_2.tStop = t  # not accounting for scr refresh
                    image_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_2, 'tStopRefresh')  # time at next scr refresh
                    image_2.setAutoDraw(False)
            
            # *slider_2* updates
            if slider_2.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
                # keep track of start time/frame for later
                slider_2.frameNStart = frameN  # exact frame index
                slider_2.tStart = t  # local t and not account for scr refresh
                slider_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(slider_2, 'tStartRefresh')  # time at next scr refresh
                slider_2.setAutoDraw(True)
            if slider_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > slider_2.tStartRefresh + 8-frameTolerance:
                    # keep track of stop time/frame for later
                    slider_2.tStop = t  # not accounting for scr refresh
                    slider_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(slider_2, 'tStopRefresh')  # time at next scr refresh
                    slider_2.setAutoDraw(False)
            
            # Check slider_2 for response to end routine
            if slider_2.getRating() is not None and slider_2.status == STARTED:
                continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in graveComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "grave"-------
        for thisComponent in graveComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        Sonido.stop()  # ensure sound has stopped at end of routine
        trials_2.addData('Sonido.started', Sonido.tStartRefresh)
        trials_2.addData('Sonido.stopped', Sonido.tStopRefresh)
        trials_2.addData('image_2.started', image_2.tStartRefresh)
        trials_2.addData('image_2.stopped', image_2.tStopRefresh)
        trials_2.addData('slider_2.response', slider_2.getRating())
        trials_2.addData('slider_2.rt', slider_2.getRT())
        trials_2.addData('slider_2.started', slider_2.tStartRefresh)
        trials_2.addData('slider_2.stopped', slider_2.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials_2'
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "Pago"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
# keep track of which components have finished
PagoComponents = [text]
for thisComponent in PagoComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
PagoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Pago"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = PagoClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=PagoClock)
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
        if tThisFlipGlobal > text.tStartRefresh + 5.0-frameTolerance:
            # keep track of stop time/frame for later
            text.tStop = t  # not accounting for scr refresh
            text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
            text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PagoComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Pago"-------
for thisComponent in PagoComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)

# ------Prepare to start Routine "valor"-------
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
valorComponents = [text_2]
for thisComponent in valorComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
valorClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "valor"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = valorClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=valorClock)
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
        if tThisFlipGlobal > text_2.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            text_2.tStop = t  # not accounting for scr refresh
            text_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
            text_2.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in valorComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "valor"-------
for thisComponent in valorComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
import random
n = random.random()
k = round(n*85)
respuesta= slider2.response[k]
print(respuesta)

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

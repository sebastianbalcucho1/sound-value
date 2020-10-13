/**************** 
 * Piloto1 Test *
 ****************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'piloto1';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstruccionesRoutineBegin());
flowScheduler.add(InstruccionesRoutineEachFrame());
flowScheduler.add(InstruccionesRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(Pago1RoutineBegin());
flowScheduler.add(Pago1RoutineEachFrame());
flowScheduler.add(Pago1RoutineEnd());
flowScheduler.add(Pago2RoutineBegin());
flowScheduler.add(Pago2RoutineEachFrame());
flowScheduler.add(Pago2RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var InstruccionesClock;
var sound_3;
var graveClock;
var Sonido;
var image_2;
var slider_2;
var nuestro_slider;
var Pago1Clock;
var text;
var Pago2Clock;
var text_4;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instrucciones"
  InstruccionesClock = new util.Clock();
  sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: 'instr.ogg',
    secs: (- 1),
    });
  sound_3.setVolume(1);
  // Initialize components for Routine "grave"
  graveClock = new util.Clock();
  Sonido = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  Sonido.setVolume(1.0);
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_2',
    size: [1.0, 0.05], pos: [0, (- 0.3)], units: 'height',
    labels: ["0", "1000", "2000", "3000", "4000", "5000"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  nuestro_slider = [];
  
  // Initialize components for Routine "Pago1"
  Pago1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Pago2"
  Pago2Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var InstruccionesComponents;
function InstruccionesRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instrucciones'-------
    t = 0;
    InstruccionesClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    sound_3.setVolume(1);
    // keep track of which components have finished
    InstruccionesComponents = [];
    InstruccionesComponents.push(sound_3);
    
    InstruccionesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function InstruccionesRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instrucciones'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstruccionesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_3
    if (t >= 0.0 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_3.getDuration() + sound_3.tStart)     && sound_3.status === PsychoJS.Status.STARTED) {
      sound_3.stop();  // stop the sound (if longer than duration)
      sound_3.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstruccionesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstruccionesRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instrucciones'-------
    InstruccionesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_3.stop();  // ensure sound has stopped at end of routine
    // the Routine "Instrucciones" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'ruidos.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    const trials_2LoopScheduler = new Scheduler(psychoJS);
    trialsLoopScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
    trialsLoopScheduler.add(trials_2LoopScheduler);
    trialsLoopScheduler.add(trials_2LoopEnd);
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'imagenes.xlsx',
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_2.forEach(function() {
    const snapshot = trials_2.getSnapshot();

    trials_2LoopScheduler.add(importConditions(snapshot));
    trials_2LoopScheduler.add(graveRoutineBegin(snapshot));
    trials_2LoopScheduler.add(graveRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(graveRoutineEnd(snapshot));
    trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var graveComponents;
function graveRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'grave'-------
    t = 0;
    graveClock.reset(); // clock
    frameN = -1;
    routineTimer.add(20.000000);
    // update component parameters for each repeat
    Sonido = new sound.Sound({
    win: psychoJS.window,
    value: Hertz,
    secs: 5,
    });
    Sonido.secs=5;
    Sonido.setVolume(volumen);
    image_2.setImage(Imagenes);
    slider_2.reset()
    // keep track of which components have finished
    graveComponents = [];
    graveComponents.push(Sonido);
    graveComponents.push(image_2);
    graveComponents.push(slider_2);
    
    graveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function graveRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'grave'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = graveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop Sonido
    if (t >= 0.0 && Sonido.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sonido.tStart = t;  // (not accounting for frame time here)
      Sonido.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ Sonido.play(); });  // screen flip
      Sonido.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Sonido.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (5 > 0.5) {  Sonido.stop();  // stop the sound (if longer than duration)
        Sonido.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_2* updates
    if (t >= 5 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 5 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // *slider_2* updates
    if (t >= 5 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }

    frameRemains = 5 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_2.setAutoDraw(false);
    }
    
    // Check slider_2 for response to end routine
    if (slider_2.getRating() !== undefined && slider_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    graveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function graveRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'grave'-------
    graveComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Sonido.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('slider_2.response', slider_2.getRating());
    psychoJS.experiment.addData('slider_2.rt', slider_2.getRT());
    nuestro_slider.push(slider_2.getRating());
    
    return Scheduler.Event.NEXT;
  };
}


var n_precio_aleatorio;
var precio_aleatorio;
var mensaje_precio_aleatorio;
var Pago1Components;
function Pago1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Pago1'-------
    t = 0;
    Pago1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    var mensaje_precio_aleatorio, n_precio_aleatorio, precio_aleatorio;
    n_precio_aleatorio = Math.random();
    precio_aleatorio = Math.round((n_precio_aleatorio * 5000));
    mensaje_precio_aleatorio = `El número aleatorio es ${precio_aleatorio}.`;
    
    text.setText(mensaje_precio_aleatorio);
    // keep track of which components have finished
    Pago1Components = [];
    Pago1Components.push(text);
    
    Pago1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function Pago1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Pago1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pago1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pago1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pago1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Pago1'-------
    Pago1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var n_precio_sujeto;
var precio_sujeto_pos;
var precio_sujeto;
var mensaje_precio_sujeto;
var Pago2Components;
function Pago2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Pago2'-------
    t = 0;
    Pago2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    text_4.setText(mensaje_precio_sujeto);
    var mensaje_precio_sujeto, n_precio_sujeto, precio_sujeto, precio_sujeto_pos;
    n_precio_sujeto = Math.random();
    precio_sujeto_pos = Math.round((n_precio_sujeto * nuestro_slider.length));
    precio_sujeto = Number.parseInt(Math.round((nuestro_slider[precio_sujeto_pos] * 1000)));
    mensaje_precio_sujeto = `El precio seleccionado aleatoriamente es ${precio_sujeto}.`;
    
    // keep track of which components have finished
    Pago2Components = [];
    Pago2Components.push(text_4);
    
    Pago2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function Pago2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Pago2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pago2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pago2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pago2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Pago2'-------
    Pago2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

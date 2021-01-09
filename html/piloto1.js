/**************** 
 * Piloto1 Test *
 ****************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
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
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(intro_2RoutineBegin());
flowScheduler.add(intro_2RoutineEachFrame());
flowScheduler.add(intro_2RoutineEnd());
flowScheduler.add(intro_pruebaRoutineBegin());
flowScheduler.add(intro_pruebaRoutineEachFrame());
flowScheduler.add(intro_pruebaRoutineEnd());
flowScheduler.add(prueba_1RoutineBegin());
flowScheduler.add(prueba_1RoutineEachFrame());
flowScheduler.add(prueba_1RoutineEnd());
flowScheduler.add(prueba_2RoutineBegin());
flowScheduler.add(prueba_2RoutineEachFrame());
flowScheduler.add(prueba_2RoutineEnd());
flowScheduler.add(intro_experimentoRoutineBegin());
flowScheduler.add(intro_experimentoRoutineEachFrame());
flowScheduler.add(intro_experimentoRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(subasta1RoutineBegin());
flowScheduler.add(subasta1RoutineEachFrame());
flowScheduler.add(subasta1RoutineEnd());
flowScheduler.add(subasta2RoutineBegin());
flowScheduler.add(subasta2RoutineEachFrame());
flowScheduler.add(subasta2RoutineEnd());
flowScheduler.add(pago1RoutineBegin());
flowScheduler.add(pago1RoutineEachFrame());
flowScheduler.add(pago1RoutineEnd());
flowScheduler.add(pago2RoutineBegin());
flowScheduler.add(pago2RoutineEachFrame());
flowScheduler.add(pago2RoutineEnd());
flowScheduler.add(productoRoutineBegin());
flowScheduler.add(productoRoutineEachFrame());
flowScheduler.add(productoRoutineEnd());
flowScheduler.add(pago3RoutineBegin());
flowScheduler.add(pago3RoutineEachFrame());
flowScheduler.add(pago3RoutineEnd());
flowScheduler.add(intro_encuestaRoutineBegin());
flowScheduler.add(intro_encuestaRoutineEachFrame());
flowScheduler.add(intro_encuestaRoutineEnd());
flowScheduler.add(encuestaRoutineBegin());
flowScheduler.add(encuestaRoutineEachFrame());
flowScheduler.add(encuestaRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.5';
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

function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  mensaje_intro = new visual.TextBox({
    win: psychoJS.window,
    name: 'mensaje_intro',
    text: 'Bienvenido al juego de <b>subasta</b>.\n\nOprima el botón rojo para avanzar.',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: true, italic: false,
    opacity: 1,
    padding: 1,
    editable: false,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro_2"
  intro_2Clock = new util.Clock();
  mensaje_intro_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'mensaje_intro_2',
    text: 'A continuación, usted participará en un juego de diferentes subastas.\nEste juego dispondrá de múltiples subastas por diferentes productos, donde deberá indicar la suma de dinero que está dispuesto a pagar por ellos. \n• En cada subasta, usted será expuesto a un sonido durante 5 segundos mientras observa una pantalla gris. \n• Al cabo de este tiempo, se le mostrará una pantalla donde en la parte superior habrá un producto alimenticio y en la parte inferior una barra deslizadora que va desde cero hasta 5 mil pesos colombianos. \n• Para responder, usted debe mover el cursor sobre la barra hasta el valor deseado y hacer click. \n• Luego de esto, el sistema seguirá automáticamente a la siguiente ronda donde se repetirá el proceso con un bien distinto. \n',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.03,
    size: undefined,  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: 1,
    editable: false,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro_prueba"
  intro_pruebaClock = new util.Clock();
  textbox_prueba = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_prueba',
    text: 'En este momento, realizará 2 rondas de prueba del juego, para que se familiarice con su apariencia y dinámica.',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.04,
    size: undefined,  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    editable: false,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prueba_1"
  prueba_1Clock = new util.Clock();
  sonido_prueba = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sonido_prueba.setVolume(1.0);
  image_prueba = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_prueba', units : undefined, 
    image : 'imagenes/lapicero.jpg', mask : undefined,
    ori : 0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  slider_prueba = new visual.Slider({
    win: psychoJS.window, name: 'slider_prueba',
    size: [1.0, 0.05], pos: [0, (- 0.3)], units: 'height',
    labels: ["0", "1000", "2000", "3000", "4000", "5000"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 0, style: [visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('DimGrey'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "prueba_2"
  prueba_2Clock = new util.Clock();
  sonido_prueba_2 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sonido_prueba_2.setVolume(1.0);
  image_prueba_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_prueba_2', units : undefined, 
    image : 'imagenes/jabon.jpg', mask : undefined,
    ori : 0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  slider_prueba_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_prueba_2',
    size: [1.0, 0.05], pos: [0, (- 0.3)], units: 'height',
    labels: ["0", "1000", "2000", "3000", "4000", "5000"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 0, style: [visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('DimGrey'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "intro_experimento"
  intro_experimentoClock = new util.Clock();
  textbox_prueba_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_prueba_2',
    text: 'Han acabado las rondas de entrenamiento.\n\nA continuación, empezarán las rondas del juego.',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: 1,
    editable: false,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "experimento"
  experimentoClock = new util.Clock();
  sonido_exp = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sonido_exp.setVolume(1.0);
  image_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_exp', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  slider_exp = new visual.Slider({
    win: psychoJS.window, name: 'slider_exp',
    size: [1.0, 0.05], pos: [0, (- 0.3)], units: 'height',
    labels: ["0", "1000", "2000", "3000", "4000", "5000"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 0, style: [visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('DimGrey'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  nuestro_slider = [];
  image_slider = [];
  
  // Initialize components for Routine "subasta1"
  subasta1Clock = new util.Clock();
  text_subasta1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_subasta1',
    text: 'Ahora realizará una subasta. \n\nUsted en este momento posee 20.000 pesos\n\nEsta subasta consiste en comparar una de las valoraciones que usted dio por uno de los artículos, escogida de forma aleatoria, con una respuesta generada aleatoriamente por la computadora.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "subasta2"
  subasta2Clock = new util.Clock();
  text_subasta2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_subasta2',
    text: 'Si la valoración que usted dio es MAYOR a la respuesta que genere la computadora, se le entregará el producto por el cuál realizó esa valoración y se le entregará el resultado de la resta de los 20.000 pesos y el valor del producto.\n\nSi la valoración que usted dio es MENOR a la respuesta que genere la computadora, se le entregarán los 20.000 pesos que tenía inicialmente.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pago1"
  pago1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pago2"
  pago2Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "producto"
  productoClock = new util.Clock();
  text_producto = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_producto',
    text: 'El producto sobre el cual se realizó la subasta es:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.275], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.15)], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pago3"
  pago3Clock = new util.Clock();
  texto_final = new visual.TextStim({
    win: psychoJS.window,
    name: 'texto_final',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro_encuesta"
  intro_encuestaClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Ha finalizado el juego de subasta.\n\nLe pediremos que de click en el botón rojo para ser redirigido a una encuesta donde se le harán preguntas de interés para nuestro estudio.\n\nMuchas gracias por su participación en este juego.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "encuesta"
  encuestaClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function introRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(mensaje_intro);
    introComponents.push(key_resp);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function introRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mensaje_intro* updates
    if (t >= 0 && mensaje_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mensaje_intro.tStart = t;  // (not accounting for frame time here)
      mensaje_intro.frameNStart = frameN;  // exact frame index
      
      mensaje_intro.setAutoDraw(true);
    }

    frameRemains = 0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mensaje_intro.status === PsychoJS.Status.STARTED || mensaje_intro.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mensaje_intro.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function introRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro'-------
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function intro_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro_2'-------
    t = 0;
    intro_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    intro_2Components = [];
    intro_2Components.push(mensaje_intro_2);
    intro_2Components.push(key_resp_2);
    
    for (const thisComponent of intro_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function intro_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = intro_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mensaje_intro_2* updates
    if (t >= 0 && mensaje_intro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mensaje_intro_2.tStart = t;  // (not accounting for frame time here)
      mensaje_intro_2.frameNStart = frameN;  // exact frame index
      
      mensaje_intro_2.setAutoDraw(true);
    }

    frameRemains = 0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mensaje_intro_2.status === PsychoJS.Status.STARTED || mensaje_intro_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mensaje_intro_2.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of intro_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function intro_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro_2'-------
    for (const thisComponent of intro_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "intro_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function intro_pruebaRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro_prueba'-------
    t = 0;
    intro_pruebaClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    intro_pruebaComponents = [];
    intro_pruebaComponents.push(textbox_prueba);
    intro_pruebaComponents.push(key_resp_3);
    
    for (const thisComponent of intro_pruebaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function intro_pruebaRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro_prueba'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = intro_pruebaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_prueba* updates
    if (t >= 0.0 && textbox_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_prueba.tStart = t;  // (not accounting for frame time here)
      textbox_prueba.frameNStart = frameN;  // exact frame index
      
      textbox_prueba.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((textbox_prueba.status === PsychoJS.Status.STARTED || textbox_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      textbox_prueba.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of intro_pruebaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function intro_pruebaRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro_prueba'-------
    for (const thisComponent of intro_pruebaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "intro_prueba" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function prueba_1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'prueba_1'-------
    t = 0;
    prueba_1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(25.000000);
    // update component parameters for each repeat
    sonido_prueba = new sound.Sound({
    win: psychoJS.window,
    value: '800',
    secs: 5,
    });
    sonido_prueba.secs=5;
    sonido_prueba.setVolume(0.02);
    slider_prueba.reset()
    // keep track of which components have finished
    prueba_1Components = [];
    prueba_1Components.push(sonido_prueba);
    prueba_1Components.push(image_prueba);
    prueba_1Components.push(slider_prueba);
    
    for (const thisComponent of prueba_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function prueba_1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'prueba_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = prueba_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sonido_prueba
    if (t >= 0.0 && sonido_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sonido_prueba.tStart = t;  // (not accounting for frame time here)
      sonido_prueba.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sonido_prueba.play(); });  // screen flip
      sonido_prueba.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sonido_prueba.status === PsychoJS.Status.STARTED || sonido_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      if (5 > 0.5) {  sonido_prueba.stop();  // stop the sound (if longer than duration)
        sonido_prueba.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_prueba* updates
    if (t >= 5 && image_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_prueba.tStart = t;  // (not accounting for frame time here)
      image_prueba.frameNStart = frameN;  // exact frame index
      
      image_prueba.setAutoDraw(true);
    }

    frameRemains = 5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image_prueba.status === PsychoJS.Status.STARTED || image_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image_prueba.setAutoDraw(false);
    }
    
    // *slider_prueba* updates
    if (t >= 5 && slider_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_prueba.tStart = t;  // (not accounting for frame time here)
      slider_prueba.frameNStart = frameN;  // exact frame index
      
      slider_prueba.setAutoDraw(true);
    }

    frameRemains = 5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_prueba.status === PsychoJS.Status.STARTED || slider_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_prueba.setAutoDraw(false);
    }
    
    // Check slider_prueba for response to end routine
    if (slider_prueba.getRating() !== undefined && slider_prueba.status === PsychoJS.Status.STARTED) {
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
    for (const thisComponent of prueba_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function prueba_1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'prueba_1'-------
    for (const thisComponent of prueba_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sonido_prueba.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('slider_prueba.response', slider_prueba.getRating());
    psychoJS.experiment.addData('slider_prueba.rt', slider_prueba.getRT());
    return Scheduler.Event.NEXT;
  };
}

function prueba_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'prueba_2'-------
    t = 0;
    prueba_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(25.000000);
    // update component parameters for each repeat
    sonido_prueba_2 = new sound.Sound({
    win: psychoJS.window,
    value: '800',
    secs: 5,
    });
    sonido_prueba_2.secs=5;
    sonido_prueba_2.setVolume(0.02);
    slider_prueba_2.reset()
    // keep track of which components have finished
    prueba_2Components = [];
    prueba_2Components.push(sonido_prueba_2);
    prueba_2Components.push(image_prueba_2);
    prueba_2Components.push(slider_prueba_2);
    
    for (const thisComponent of prueba_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function prueba_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'prueba_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = prueba_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sonido_prueba_2
    if (t >= 0.0 && sonido_prueba_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sonido_prueba_2.tStart = t;  // (not accounting for frame time here)
      sonido_prueba_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sonido_prueba_2.play(); });  // screen flip
      sonido_prueba_2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sonido_prueba_2.status === PsychoJS.Status.STARTED || sonido_prueba_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      if (5 > 0.5) {  sonido_prueba_2.stop();  // stop the sound (if longer than duration)
        sonido_prueba_2.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_prueba_2* updates
    if (t >= 5 && image_prueba_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_prueba_2.tStart = t;  // (not accounting for frame time here)
      image_prueba_2.frameNStart = frameN;  // exact frame index
      
      image_prueba_2.setAutoDraw(true);
    }

    frameRemains = 5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image_prueba_2.status === PsychoJS.Status.STARTED || image_prueba_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image_prueba_2.setAutoDraw(false);
    }
    
    // *slider_prueba_2* updates
    if (t >= 5 && slider_prueba_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_prueba_2.tStart = t;  // (not accounting for frame time here)
      slider_prueba_2.frameNStart = frameN;  // exact frame index
      
      slider_prueba_2.setAutoDraw(true);
    }

    frameRemains = 5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_prueba_2.status === PsychoJS.Status.STARTED || slider_prueba_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_prueba_2.setAutoDraw(false);
    }
    
    // Check slider_prueba_2 for response to end routine
    if (slider_prueba_2.getRating() !== undefined && slider_prueba_2.status === PsychoJS.Status.STARTED) {
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
    for (const thisComponent of prueba_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function prueba_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'prueba_2'-------
    for (const thisComponent of prueba_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sonido_prueba_2.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('slider_prueba_2.response', slider_prueba_2.getRating());
    psychoJS.experiment.addData('slider_prueba_2.rt', slider_prueba_2.getRT());
    return Scheduler.Event.NEXT;
  };
}

function intro_experimentoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro_experimento'-------
    t = 0;
    intro_experimentoClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    intro_experimentoComponents = [];
    intro_experimentoComponents.push(textbox_prueba_2);
    intro_experimentoComponents.push(key_resp_4);
    
    for (const thisComponent of intro_experimentoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function intro_experimentoRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro_experimento'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = intro_experimentoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_prueba_2* updates
    if (t >= 0.0 && textbox_prueba_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_prueba_2.tStart = t;  // (not accounting for frame time here)
      textbox_prueba_2.frameNStart = frameN;  // exact frame index
      
      textbox_prueba_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((textbox_prueba_2.status === PsychoJS.Status.STARTED || textbox_prueba_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      textbox_prueba_2.setAutoDraw(false);
    }
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of intro_experimentoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function intro_experimentoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro_experimento'-------
    for (const thisComponent of intro_experimentoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "intro_experimento" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

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
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    const trials_2LoopScheduler = new Scheduler(psychoJS);
    trialsLoopScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
    trialsLoopScheduler.add(trials_2LoopScheduler);
    trialsLoopScheduler.add(trials_2LoopEnd);
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

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
  for (const thisTrial_2 of trials_2) {
    const snapshot = trials_2.getSnapshot();
    trials_2LoopScheduler.add(importConditions(snapshot));
    trials_2LoopScheduler.add(experimentoRoutineBegin(snapshot));
    trials_2LoopScheduler.add(experimentoRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(experimentoRoutineEnd(snapshot));
    trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
  }

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

function experimentoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'experimento'-------
    t = 0;
    experimentoClock.reset(); // clock
    frameN = -1;
    routineTimer.add(25.000000);
    // update component parameters for each repeat
    sonido_exp = new sound.Sound({
    win: psychoJS.window,
    value: Hertz,
    secs: 5,
    });
    sonido_exp.secs=5;
    sonido_exp.setVolume(volumen);
    image_exp.setImage(Imagenes);
    slider_exp.reset()
    // keep track of which components have finished
    experimentoComponents = [];
    experimentoComponents.push(sonido_exp);
    experimentoComponents.push(image_exp);
    experimentoComponents.push(slider_exp);
    
    for (const thisComponent of experimentoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function experimentoRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'experimento'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = experimentoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sonido_exp
    if (t >= 0.0 && sonido_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sonido_exp.tStart = t;  // (not accounting for frame time here)
      sonido_exp.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sonido_exp.play(); });  // screen flip
      sonido_exp.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sonido_exp.status === PsychoJS.Status.STARTED || sonido_exp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      if (5 > 0.5) {  sonido_exp.stop();  // stop the sound (if longer than duration)
        sonido_exp.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_exp* updates
    if (t >= 5 && image_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_exp.tStart = t;  // (not accounting for frame time here)
      image_exp.frameNStart = frameN;  // exact frame index
      
      image_exp.setAutoDraw(true);
    }

    frameRemains = 5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image_exp.status === PsychoJS.Status.STARTED || image_exp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image_exp.setAutoDraw(false);
    }
    
    // *slider_exp* updates
    if (t >= 5 && slider_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_exp.tStart = t;  // (not accounting for frame time here)
      slider_exp.frameNStart = frameN;  // exact frame index
      
      slider_exp.setAutoDraw(true);
    }

    frameRemains = 5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_exp.status === PsychoJS.Status.STARTED || slider_exp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_exp.setAutoDraw(false);
    }
    
    // Check slider_exp for response to end routine
    if (slider_exp.getRating() !== undefined && slider_exp.status === PsychoJS.Status.STARTED) {
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
    for (const thisComponent of experimentoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function experimentoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'experimento'-------
    for (const thisComponent of experimentoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sonido_exp.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('slider_exp.response', slider_exp.getRating());
    psychoJS.experiment.addData('slider_exp.rt', slider_exp.getRT());
    rating = slider_exp.getRating();
    Imagenes1 = Imagenes;
    nuestro_slider.push(rating);
    image_slider.push(Imagenes1);
    
    
    return Scheduler.Event.NEXT;
  };
}

function subasta1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'subasta1'-------
    t = 0;
    subasta1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    subasta1Components = [];
    subasta1Components.push(text_subasta1);
    subasta1Components.push(key_resp_5);
    
    for (const thisComponent of subasta1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function subasta1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'subasta1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = subasta1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_subasta1* updates
    if (t >= 0.0 && text_subasta1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_subasta1.tStart = t;  // (not accounting for frame time here)
      text_subasta1.frameNStart = frameN;  // exact frame index
      
      text_subasta1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_subasta1.status === PsychoJS.Status.STARTED || text_subasta1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_subasta1.setAutoDraw(false);
    }
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of subasta1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function subasta1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'subasta1'-------
    for (const thisComponent of subasta1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "subasta1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function subasta2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'subasta2'-------
    t = 0;
    subasta2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    subasta2Components = [];
    subasta2Components.push(text_subasta2);
    subasta2Components.push(key_resp_6);
    
    for (const thisComponent of subasta2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function subasta2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'subasta2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = subasta2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_subasta2* updates
    if (t >= 0.0 && text_subasta2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_subasta2.tStart = t;  // (not accounting for frame time here)
      text_subasta2.frameNStart = frameN;  // exact frame index
      
      text_subasta2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_subasta2.status === PsychoJS.Status.STARTED || text_subasta2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_subasta2.setAutoDraw(false);
    }
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of subasta2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function subasta2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'subasta2'-------
    for (const thisComponent of subasta2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "subasta2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function pago1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pago1'-------
    t = 0;
    pago1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    var mensaje_precio_aleatorio, n_precio_aleatorio, precio_aleatorio;
    n_precio_aleatorio = Math.random();
    precio_aleatorio = Math.round((n_precio_aleatorio * 5000));
    mensaje_precio_aleatorio = `El número generado aleatoriamente por la computadora es ${precio_aleatorio}.`;
    
    text.setText(mensaje_precio_aleatorio);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    pago1Components = [];
    pago1Components.push(text);
    pago1Components.push(key_resp_7);
    
    for (const thisComponent of pago1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function pago1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'pago1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pago1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text.status === PsychoJS.Status.STARTED || text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of pago1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function pago1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pago1'-------
    for (const thisComponent of pago1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "pago1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function pago2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pago2'-------
    t = 0;
    pago2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    var mensaje_precio_sujeto, n_precio_sujeto, precio_sujeto, precio_sujeto_pos;
    n_precio_sujeto = Math.random();
    precio_sujeto_pos = Math.round((n_precio_sujeto * nuestro_slider.length));
    precio_sujeto = Number.parseInt(Math.round((nuestro_slider[precio_sujeto_pos] * 1000))-1000);
    mensaje_precio_sujeto = `El precio seleccionado aleatoriamente de sus respuestas es ${precio_sujeto}.`;
    imagen_estimulo= image_slider[precio_sujeto_pos]
    text_4.setText(mensaje_precio_sujeto);
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    pago2Components = [];
    pago2Components.push(text_4);
    pago2Components.push(key_resp_8);
    
    for (const thisComponent of pago2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function pago2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'pago2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pago2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_4.status === PsychoJS.Status.STARTED || text_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of pago2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function pago2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pago2'-------
    for (const thisComponent of pago2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('product', imagen_estimulo)
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "pago2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function productoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'producto'-------
    t = 0;
    productoClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    image.setImage(imagen_estimulo);
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    productoComponents = [];
    productoComponents.push(text_producto);
    productoComponents.push(image);
    productoComponents.push(key_resp_9);
    
    for (const thisComponent of productoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function productoRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'producto'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = productoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_producto* updates
    if (t >= 0.0 && text_producto.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_producto.tStart = t;  // (not accounting for frame time here)
      text_producto.frameNStart = frameN;  // exact frame index
      
      text_producto.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_producto.status === PsychoJS.Status.STARTED || text_producto.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_producto.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image.status === PsychoJS.Status.STARTED || image.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of productoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function productoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'producto'-------
    for (const thisComponent of productoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "producto" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function pago3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pago3'-------
    t = 0;
    pago3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    diferencia = (20000 - precio_sujeto);
    if ((precio_sujeto > precio_aleatorio)) {
        mensaje1 = `Usted ha ganado ${diferencia} pesos y el producto por el cuál subastó`;
    } else {
        mensaje1 = `Usted ha ganado 20.000 pesos`;
    }
    
    texto_final.setText(mensaje1);
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    pago3Components = [];
    pago3Components.push(texto_final);
    pago3Components.push(key_resp_10);
    
    for (const thisComponent of pago3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function pago3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'pago3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pago3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *texto_final* updates
    if (t >= 0.0 && texto_final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      texto_final.tStart = t;  // (not accounting for frame time here)
      texto_final.frameNStart = frameN;  // exact frame index
      
      texto_final.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((texto_final.status === PsychoJS.Status.STARTED || texto_final.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      texto_final.setAutoDraw(false);
    }
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of pago3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function pago3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pago3'-------
    for (const thisComponent of pago3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mensaje', mensaje1)
    
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "pago3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function intro_encuestaRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro_encuesta'-------
    t = 0;
    intro_encuestaClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    intro_encuestaComponents = [];
    intro_encuestaComponents.push(text_2);
    intro_encuestaComponents.push(key_resp_11);
    
    for (const thisComponent of intro_encuestaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function intro_encuestaRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro_encuesta'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = intro_encuestaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 500 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_2.status === PsychoJS.Status.STARTED || text_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of intro_encuestaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function intro_encuestaRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro_encuesta'-------
    for (const thisComponent of intro_encuestaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "intro_encuesta" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function encuestaRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'encuesta'-------
    t = 0;
    encuestaClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    encuestaComponents = [];
    
    for (const thisComponent of encuestaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}

function encuestaRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'encuesta'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = encuestaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of encuestaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function encuestaRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'encuesta'-------
    for (const thisComponent of encuestaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "encuesta" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  import * as webbrowser from 'webbrowser';
  webbrowser.open("https://www.youtube.com");
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

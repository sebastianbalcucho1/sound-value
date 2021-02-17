/**************** 
 * Piloto2 Test *
 ****************/

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
let expName = 'piloto2';  // from the Builder filename that created this script
let expInfo = {'nombre': ''};

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
flowScheduler.add(subasta1RoutineBegin());
flowScheduler.add(subasta1RoutineEachFrame());
flowScheduler.add(subasta1RoutineEnd());
flowScheduler.add(subasta2RoutineBegin());
flowScheduler.add(subasta2RoutineEachFrame());
flowScheduler.add(subasta2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(text_pagoRoutineBegin());
flowScheduler.add(text_pagoRoutineEachFrame());
flowScheduler.add(text_pagoRoutineEnd());
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
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
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
  psychoJS.setRedirectUrls('https://www.youtube.com/', 'https://www.youtube.com/');

  return Scheduler.Event.NEXT;
}


var introClock;
var mensaje_intro;
var boton_intro;
var mouse_intro;
var intro_2Clock;
var mensaje_intro_2;
var boton_intro_2;
var mouse_intro_2;
var intro_pruebaClock;
var text_prueba;
var boton_intro_prueba;
var mouse_intro_prueba;
var prueba_1Clock;
var sonido_prueba;
var image_prueba;
var slider_prueba;
var prueba_2Clock;
var sonido_prueba_2;
var image_prueba_2;
var slider_prueba_2;
var intro_experimentoClock;
var text_prueba_2;
var boton_intro_exp;
var mouse_intro_exp;
var subasta1Clock;
var text_subasta1;
var boton_subasta1;
var mouse_subasta1;
var subasta2Clock;
var text_subasta2;
var boton_subasta2;
var mouse_subasta2;
var experimentoClock;
var nuestro_slider;
var image_slider;
var text_pagoClock;
var text_3;
var boton_pago1_2;
var mouse_pago1_2;
var pago1Clock;
var text;
var boton_pago1;
var mouse_pago1;
var pago2Clock;
var text_4;
var boton_pago2;
var mouse_pago2;
var productoClock;
var text_producto;
var image;
var boton_producto;
var mouse_producto;
var pago3Clock;
var texto_final;
var boton_pago3;
var mouse_pago3;
var intro_encuestaClock;
var text_2;
var boton_intro_encuesta;
var mouse_intro_encuesta;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  mensaje_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'mensaje_intro',
    text: 'Bienvenido al juego de subasta\n\nOprima el botón rojo para avanzar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  boton_intro = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_intro', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_intro = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_intro.mouseClock = new util.Clock();
  // Initialize components for Routine "intro_2"
  intro_2Clock = new util.Clock();
  mensaje_intro_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'mensaje_intro_2',
    text: 'A continuación, usted participará en un juego de diferentes subastas.\nEste juego dispondrá de múltiples subastas por diferentes productos, donde deberá indicar la suma de dinero que está dispuesto a pagar por ellos. \n• En cada subasta, usted será expuesto a un sonido durante 5 segundos mientras observa una pantalla gris. \n• Al cabo de este tiempo, se le mostrará una pantalla donde en la parte superior habrá un producto alimenticio y en la parte inferior una barra deslizadora que va desde cero hasta 5 mil pesos colombianos. \n• Para responder, usted debe mover el cursor sobre la barra hasta el valor deseado y hacer click. \n• Luego de esto, el sistema seguirá automáticamente a la siguiente ronda donde se repetirá el proceso con un bien distinto. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  boton_intro_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_intro_2', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_intro_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_intro_2.mouseClock = new util.Clock();
  // Initialize components for Routine "intro_prueba"
  intro_pruebaClock = new util.Clock();
  text_prueba = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_prueba',
    text: 'En este momento, realizará 2 rondas de prueba del juego, para que se familiarice con su apariencia y dinámica.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  boton_intro_prueba = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_intro_prueba', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_intro_prueba = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_intro_prueba.mouseClock = new util.Clock();
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
  text_prueba_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_prueba_2',
    text: 'Han acabado las rondas de entrenamiento.\n\nA continuación, empezarán las rondas del juego',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  boton_intro_exp = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_intro_exp', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_intro_exp = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_intro_exp.mouseClock = new util.Clock();
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
  
  boton_subasta1 = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_subasta1', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_subasta1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_subasta1.mouseClock = new util.Clock();
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
  
  boton_subasta2 = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_subasta2', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_subasta2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_subasta2.mouseClock = new util.Clock();
  // Initialize components for Routine "experimento"
  experimentoClock = new util.Clock();
  nuestro_slider = [];
  image_slider = [];
  
  // Initialize components for Routine "text_pago"
  text_pagoClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  boton_pago1_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_pago1_2', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_pago1_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pago1_2.mouseClock = new util.Clock();
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
  
  boton_pago1 = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_pago1', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  mouse_pago1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pago1.mouseClock = new util.Clock();
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
  
  boton_pago2 = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_pago2', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  mouse_pago2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pago2.mouseClock = new util.Clock();
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
  boton_producto = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_producto', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  mouse_producto = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_producto.mouseClock = new util.Clock();
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
  
  boton_pago3 = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_pago3', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  mouse_pago3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pago3.mouseClock = new util.Clock();
  // Initialize components for Routine "intro_encuesta"
  intro_encuestaClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Ha finalizado el juego de subasta.\n\nLe pediremos que de click en el botón rojo para acabar la sesión. A continuación aparecerá un mensaje "Thank you for your patience" seguido de un botón "Ok". \n\nPor favor, oprima el botón para ser redirigido a una encuesta que nos servirá en nuestro estudio.\n\nMuchas gracias por su participación en este juego.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  boton_intro_encuesta = new visual.Polygon ({
    win: psychoJS.window, name: 'boton_intro_encuesta', 
    edges: 100, size:[0.2, 0.2],
    ori: 0, pos: [0.7, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([202, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_intro_encuesta = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_intro_encuesta.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var gotValidClick;
var introComponents;
function introRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_intro
    mouse_intro.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(mensaje_intro);
    introComponents.push(boton_intro);
    introComponents.push(mouse_intro);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var frameRemains;
var prevButtonState;
var _mouseButtons;
var continueRoutine;
function introRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mensaje_intro* updates
    if (t >= 0.0 && mensaje_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mensaje_intro.tStart = t;  // (not accounting for frame time here)
      mensaje_intro.frameNStart = frameN;  // exact frame index
      
      mensaje_intro.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mensaje_intro.status === PsychoJS.Status.STARTED || mensaje_intro.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mensaje_intro.setAutoDraw(false);
    }
    
    // *boton_intro* updates
    if (t >= 0.0 && boton_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_intro.tStart = t;  // (not accounting for frame time here)
      boton_intro.frameNStart = frameN;  // exact frame index
      
      boton_intro.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_intro.status === PsychoJS.Status.STARTED || boton_intro.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_intro.setAutoDraw(false);
    }
    // *mouse_intro* updates
    if (t >= 0.0 && mouse_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_intro.tStart = t;  // (not accounting for frame time here)
      mouse_intro.frameNStart = frameN;  // exact frame index
      
      mouse_intro.status = PsychoJS.Status.STARTED;
      mouse_intro.mouseClock.reset();
      prevButtonState = mouse_intro.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_intro.status === PsychoJS.Status.STARTED || mouse_intro.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_intro.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_intro.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_intro.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_intro)]) {
            if (obj.contains(mouse_intro)) {
              gotValidClick = true;
              mouse_intro.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    introComponents.forEach( function(thisComponent) {
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


var _mouseXYs;
function introRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro'-------
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_intro.getPos();
    _mouseButtons = mouse_intro.getPressed();
    psychoJS.experiment.addData('mouse_intro.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_intro.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_intro.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_intro.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_intro.rightButton', _mouseButtons[2]);
    if (mouse_intro.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_intro.clicked_name', mouse_intro.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var intro_2Components;
function intro_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro_2'-------
    t = 0;
    intro_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_intro_2
    mouse_intro_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    intro_2Components = [];
    intro_2Components.push(mensaje_intro_2);
    intro_2Components.push(boton_intro_2);
    intro_2Components.push(mouse_intro_2);
    
    intro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if (t >= 0.0 && mensaje_intro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mensaje_intro_2.tStart = t;  // (not accounting for frame time here)
      mensaje_intro_2.frameNStart = frameN;  // exact frame index
      
      mensaje_intro_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mensaje_intro_2.status === PsychoJS.Status.STARTED || mensaje_intro_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mensaje_intro_2.setAutoDraw(false);
    }
    
    // *boton_intro_2* updates
    if (t >= 0.0 && boton_intro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_intro_2.tStart = t;  // (not accounting for frame time here)
      boton_intro_2.frameNStart = frameN;  // exact frame index
      
      boton_intro_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_intro_2.status === PsychoJS.Status.STARTED || boton_intro_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_intro_2.setAutoDraw(false);
    }
    // *mouse_intro_2* updates
    if (t >= 0.0 && mouse_intro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_intro_2.tStart = t;  // (not accounting for frame time here)
      mouse_intro_2.frameNStart = frameN;  // exact frame index
      
      mouse_intro_2.status = PsychoJS.Status.STARTED;
      mouse_intro_2.mouseClock.reset();
      prevButtonState = mouse_intro_2.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_intro_2.status === PsychoJS.Status.STARTED || mouse_intro_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_intro_2.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_intro_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_intro_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_intro_2)]) {
            if (obj.contains(mouse_intro_2)) {
              gotValidClick = true;
              mouse_intro_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    intro_2Components.forEach( function(thisComponent) {
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


function intro_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro_2'-------
    intro_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_intro_2.getPos();
    _mouseButtons = mouse_intro_2.getPressed();
    psychoJS.experiment.addData('mouse_intro_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_intro_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_intro_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_intro_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_intro_2.rightButton', _mouseButtons[2]);
    if (mouse_intro_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_intro_2.clicked_name', mouse_intro_2.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var intro_pruebaComponents;
function intro_pruebaRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro_prueba'-------
    t = 0;
    intro_pruebaClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_intro_prueba
    mouse_intro_prueba.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    intro_pruebaComponents = [];
    intro_pruebaComponents.push(text_prueba);
    intro_pruebaComponents.push(boton_intro_prueba);
    intro_pruebaComponents.push(mouse_intro_prueba);
    
    intro_pruebaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *text_prueba* updates
    if (t >= 0.0 && text_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_prueba.tStart = t;  // (not accounting for frame time here)
      text_prueba.frameNStart = frameN;  // exact frame index
      
      text_prueba.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_prueba.status === PsychoJS.Status.STARTED || text_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_prueba.setAutoDraw(false);
    }
    
    // *boton_intro_prueba* updates
    if (t >= 0.0 && boton_intro_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_intro_prueba.tStart = t;  // (not accounting for frame time here)
      boton_intro_prueba.frameNStart = frameN;  // exact frame index
      
      boton_intro_prueba.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_intro_prueba.status === PsychoJS.Status.STARTED || boton_intro_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_intro_prueba.setAutoDraw(false);
    }
    // *mouse_intro_prueba* updates
    if (t >= 0.0 && mouse_intro_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_intro_prueba.tStart = t;  // (not accounting for frame time here)
      mouse_intro_prueba.frameNStart = frameN;  // exact frame index
      
      mouse_intro_prueba.status = PsychoJS.Status.STARTED;
      mouse_intro_prueba.mouseClock.reset();
      prevButtonState = mouse_intro_prueba.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_intro_prueba.status === PsychoJS.Status.STARTED || mouse_intro_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_intro_prueba.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_intro_prueba.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_intro_prueba.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_intro_prueba)]) {
            if (obj.contains(mouse_intro_prueba)) {
              gotValidClick = true;
              mouse_intro_prueba.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    intro_pruebaComponents.forEach( function(thisComponent) {
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


function intro_pruebaRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro_prueba'-------
    intro_pruebaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_intro_prueba.getPos();
    _mouseButtons = mouse_intro_prueba.getPressed();
    psychoJS.experiment.addData('mouse_intro_prueba.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_intro_prueba.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_intro_prueba.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_intro_prueba.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_intro_prueba.rightButton', _mouseButtons[2]);
    if (mouse_intro_prueba.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_intro_prueba.clicked_name', mouse_intro_prueba.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var prueba_1Components;
function prueba_1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'prueba_1'-------
    t = 0;
    prueba_1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(28.000000);
    // update component parameters for each repeat
    sonido_prueba = new sound.Sound({
    win: psychoJS.window,
    value: '800',
    secs: 3,
    });
    sonido_prueba.secs=3;
    sonido_prueba.setVolume(0.02);
    slider_prueba.reset()
    // keep track of which components have finished
    prueba_1Components = [];
    prueba_1Components.push(sonido_prueba);
    prueba_1Components.push(image_prueba);
    prueba_1Components.push(slider_prueba);
    
    prueba_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sonido_prueba.status === PsychoJS.Status.STARTED || sonido_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      if (3 > 0.5) {  sonido_prueba.stop();  // stop the sound (if longer than duration)
        sonido_prueba.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_prueba* updates
    if (t >= 3 && image_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_prueba.tStart = t;  // (not accounting for frame time here)
      image_prueba.frameNStart = frameN;  // exact frame index
      
      image_prueba.setAutoDraw(true);
    }

    frameRemains = 3 + 25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image_prueba.status === PsychoJS.Status.STARTED || image_prueba.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image_prueba.setAutoDraw(false);
    }
    
    // *slider_prueba* updates
    if (t >= 3 && slider_prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_prueba.tStart = t;  // (not accounting for frame time here)
      slider_prueba.frameNStart = frameN;  // exact frame index
      
      slider_prueba.setAutoDraw(true);
    }

    frameRemains = 3 + 25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    prueba_1Components.forEach( function(thisComponent) {
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


function prueba_1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'prueba_1'-------
    prueba_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sonido_prueba.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('slider_prueba.response', slider_prueba.getRating());
    psychoJS.experiment.addData('slider_prueba.rt', slider_prueba.getRT());
    return Scheduler.Event.NEXT;
  };
}


var prueba_2Components;
function prueba_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'prueba_2'-------
    t = 0;
    prueba_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(28.000000);
    // update component parameters for each repeat
    sonido_prueba_2 = new sound.Sound({
    win: psychoJS.window,
    value: '800',
    secs: 3,
    });
    sonido_prueba_2.secs=3;
    sonido_prueba_2.setVolume(0.02);
    slider_prueba_2.reset()
    // keep track of which components have finished
    prueba_2Components = [];
    prueba_2Components.push(sonido_prueba_2);
    prueba_2Components.push(image_prueba_2);
    prueba_2Components.push(slider_prueba_2);
    
    prueba_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sonido_prueba_2.status === PsychoJS.Status.STARTED || sonido_prueba_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      if (3 > 0.5) {  sonido_prueba_2.stop();  // stop the sound (if longer than duration)
        sonido_prueba_2.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_prueba_2* updates
    if (t >= 3 && image_prueba_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_prueba_2.tStart = t;  // (not accounting for frame time here)
      image_prueba_2.frameNStart = frameN;  // exact frame index
      
      image_prueba_2.setAutoDraw(true);
    }

    frameRemains = 3 + 25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image_prueba_2.status === PsychoJS.Status.STARTED || image_prueba_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image_prueba_2.setAutoDraw(false);
    }
    
    // *slider_prueba_2* updates
    if (t >= 3 && slider_prueba_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_prueba_2.tStart = t;  // (not accounting for frame time here)
      slider_prueba_2.frameNStart = frameN;  // exact frame index
      
      slider_prueba_2.setAutoDraw(true);
    }

    frameRemains = 3 + 25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    prueba_2Components.forEach( function(thisComponent) {
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


function prueba_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'prueba_2'-------
    prueba_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sonido_prueba_2.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('slider_prueba_2.response', slider_prueba_2.getRating());
    psychoJS.experiment.addData('slider_prueba_2.rt', slider_prueba_2.getRT());
    return Scheduler.Event.NEXT;
  };
}


var intro_experimentoComponents;
function intro_experimentoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro_experimento'-------
    t = 0;
    intro_experimentoClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_intro_exp
    mouse_intro_exp.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    intro_experimentoComponents = [];
    intro_experimentoComponents.push(text_prueba_2);
    intro_experimentoComponents.push(boton_intro_exp);
    intro_experimentoComponents.push(mouse_intro_exp);
    
    intro_experimentoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *text_prueba_2* updates
    if (t >= 0.0 && text_prueba_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_prueba_2.tStart = t;  // (not accounting for frame time here)
      text_prueba_2.frameNStart = frameN;  // exact frame index
      
      text_prueba_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_prueba_2.status === PsychoJS.Status.STARTED || text_prueba_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_prueba_2.setAutoDraw(false);
    }
    
    // *boton_intro_exp* updates
    if (t >= 0.0 && boton_intro_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_intro_exp.tStart = t;  // (not accounting for frame time here)
      boton_intro_exp.frameNStart = frameN;  // exact frame index
      
      boton_intro_exp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_intro_exp.status === PsychoJS.Status.STARTED || boton_intro_exp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_intro_exp.setAutoDraw(false);
    }
    // *mouse_intro_exp* updates
    if (t >= 0.0 && mouse_intro_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_intro_exp.tStart = t;  // (not accounting for frame time here)
      mouse_intro_exp.frameNStart = frameN;  // exact frame index
      
      mouse_intro_exp.status = PsychoJS.Status.STARTED;
      mouse_intro_exp.mouseClock.reset();
      prevButtonState = mouse_intro_exp.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_intro_exp.status === PsychoJS.Status.STARTED || mouse_intro_exp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_intro_exp.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_intro_exp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_intro_exp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_intro_exp)]) {
            if (obj.contains(mouse_intro_exp)) {
              gotValidClick = true;
              mouse_intro_exp.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    intro_experimentoComponents.forEach( function(thisComponent) {
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


function intro_experimentoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro_experimento'-------
    intro_experimentoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_intro_exp.getPos();
    _mouseButtons = mouse_intro_exp.getPressed();
    psychoJS.experiment.addData('mouse_intro_exp.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_intro_exp.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_intro_exp.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_intro_exp.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_intro_exp.rightButton', _mouseButtons[2]);
    if (mouse_intro_exp.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_intro_exp.clicked_name', mouse_intro_exp.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var subasta1Components;
function subasta1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'subasta1'-------
    t = 0;
    subasta1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_subasta1
    mouse_subasta1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    subasta1Components = [];
    subasta1Components.push(text_subasta1);
    subasta1Components.push(boton_subasta1);
    subasta1Components.push(mouse_subasta1);
    
    subasta1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_subasta1.status === PsychoJS.Status.STARTED || text_subasta1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_subasta1.setAutoDraw(false);
    }
    
    // *boton_subasta1* updates
    if (t >= 0.0 && boton_subasta1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_subasta1.tStart = t;  // (not accounting for frame time here)
      boton_subasta1.frameNStart = frameN;  // exact frame index
      
      boton_subasta1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_subasta1.status === PsychoJS.Status.STARTED || boton_subasta1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_subasta1.setAutoDraw(false);
    }
    // *mouse_subasta1* updates
    if (t >= 0.0 && mouse_subasta1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_subasta1.tStart = t;  // (not accounting for frame time here)
      mouse_subasta1.frameNStart = frameN;  // exact frame index
      
      mouse_subasta1.status = PsychoJS.Status.STARTED;
      mouse_subasta1.mouseClock.reset();
      prevButtonState = mouse_subasta1.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_subasta1.status === PsychoJS.Status.STARTED || mouse_subasta1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_subasta1.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_subasta1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_subasta1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_subasta1)]) {
            if (obj.contains(mouse_subasta1)) {
              gotValidClick = true;
              mouse_subasta1.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    subasta1Components.forEach( function(thisComponent) {
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


function subasta1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'subasta1'-------
    subasta1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_subasta1.getPos();
    _mouseButtons = mouse_subasta1.getPressed();
    psychoJS.experiment.addData('mouse_subasta1.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_subasta1.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_subasta1.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_subasta1.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_subasta1.rightButton', _mouseButtons[2]);
    if (mouse_subasta1.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_subasta1.clicked_name', mouse_subasta1.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var subasta2Components;
function subasta2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'subasta2'-------
    t = 0;
    subasta2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_subasta2
    mouse_subasta2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    subasta2Components = [];
    subasta2Components.push(text_subasta2);
    subasta2Components.push(boton_subasta2);
    subasta2Components.push(mouse_subasta2);
    
    subasta2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_subasta2.status === PsychoJS.Status.STARTED || text_subasta2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_subasta2.setAutoDraw(false);
    }
    
    // *boton_subasta2* updates
    if (t >= 0.0 && boton_subasta2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_subasta2.tStart = t;  // (not accounting for frame time here)
      boton_subasta2.frameNStart = frameN;  // exact frame index
      
      boton_subasta2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_subasta2.status === PsychoJS.Status.STARTED || boton_subasta2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_subasta2.setAutoDraw(false);
    }
    // *mouse_subasta2* updates
    if (t >= 0.0 && mouse_subasta2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_subasta2.tStart = t;  // (not accounting for frame time here)
      mouse_subasta2.frameNStart = frameN;  // exact frame index
      
      mouse_subasta2.status = PsychoJS.Status.STARTED;
      mouse_subasta2.mouseClock.reset();
      prevButtonState = mouse_subasta2.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_subasta2.status === PsychoJS.Status.STARTED || mouse_subasta2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_subasta2.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_subasta2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_subasta2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_subasta2)]) {
            if (obj.contains(mouse_subasta2)) {
              gotValidClick = true;
              mouse_subasta2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    subasta2Components.forEach( function(thisComponent) {
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


function subasta2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'subasta2'-------
    subasta2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_subasta2.getPos();
    _mouseButtons = mouse_subasta2.getPressed();
    psychoJS.experiment.addData('mouse_subasta2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_subasta2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_subasta2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_subasta2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_subasta2.rightButton', _mouseButtons[2]);
    if (mouse_subasta2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_subasta2.clicked_name', mouse_subasta2.clicked_name[0]);}
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
    trials_2LoopScheduler.add(experimentoRoutineBegin(snapshot));
    trials_2LoopScheduler.add(experimentoRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(experimentoRoutineEnd(snapshot));
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


var experimentoComponents;
function experimentoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'experimento'-------
    t = 0;
    experimentoClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    experimentoComponents = [];
    
    experimentoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    experimentoComponents.forEach( function(thisComponent) {
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


var rating;
var Imagenes1;
function experimentoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'experimento'-------
    experimentoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    rating = slider_exp.getRating();
    Imagenes1 = Imagenes;
    nuestro_slider.push(rating);
    image_slider.push(Imagenes1);
    
    
    // the Routine "experimento" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var text_pagoComponents;
function text_pagoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'text_pago'-------
    t = 0;
    text_pagoClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    text_3.setText('El precio del bien seleccionado aleatoriamente, el precio que usted seleccionó, el producto seleccionado aleatoriamente y el pago que recivirá despues de descuentos se encuentra a continuación');
    // setup some python lists for storing info about the mouse_pago1_2
    mouse_pago1_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    text_pagoComponents = [];
    text_pagoComponents.push(text_3);
    text_pagoComponents.push(boton_pago1_2);
    text_pagoComponents.push(mouse_pago1_2);
    
    text_pagoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function text_pagoRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'text_pago'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = text_pagoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_3.status === PsychoJS.Status.STARTED || text_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    // *boton_pago1_2* updates
    if (t >= 0.0 && boton_pago1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_pago1_2.tStart = t;  // (not accounting for frame time here)
      boton_pago1_2.frameNStart = frameN;  // exact frame index
      
      boton_pago1_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_pago1_2.status === PsychoJS.Status.STARTED || boton_pago1_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_pago1_2.setAutoDraw(false);
    }
    // *mouse_pago1_2* updates
    if (t >= 0.0 && mouse_pago1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pago1_2.tStart = t;  // (not accounting for frame time here)
      mouse_pago1_2.frameNStart = frameN;  // exact frame index
      
      mouse_pago1_2.status = PsychoJS.Status.STARTED;
      mouse_pago1_2.mouseClock.reset();
      prevButtonState = mouse_pago1_2.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_pago1_2.status === PsychoJS.Status.STARTED || mouse_pago1_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_pago1_2.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_pago1_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pago1_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_pago1)]) {
            if (obj.contains(mouse_pago1_2)) {
              gotValidClick = true;
              mouse_pago1_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    text_pagoComponents.forEach( function(thisComponent) {
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


function text_pagoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'text_pago'-------
    text_pagoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_pago1_2.getPos();
    _mouseButtons = mouse_pago1_2.getPressed();
    psychoJS.experiment.addData('mouse_pago1_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_pago1_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_pago1_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_pago1_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_pago1_2.rightButton', _mouseButtons[2]);
    if (mouse_pago1_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_pago1_2.clicked_name', mouse_pago1_2.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var n_precio_aleatorio;
var precio_aleatorio;
var mensaje_precio_aleatorio;
var pago1Components;
function pago1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pago1'-------
    t = 0;
    pago1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    var mensaje_precio_aleatorio, n_precio_aleatorio, precio_aleatorio;
    n_precio_aleatorio = Math.random();
    precio_aleatorio = Math.round((n_precio_aleatorio * 5000));
    mensaje_precio_aleatorio = `El número generado aleatoriamente por la computadora es ${precio_aleatorio}.`;
    
    text.setText(mensaje_precio_aleatorio);
    // setup some python lists for storing info about the mouse_pago1
    mouse_pago1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    pago1Components = [];
    pago1Components.push(text);
    pago1Components.push(boton_pago1);
    pago1Components.push(mouse_pago1);
    
    pago1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text.status === PsychoJS.Status.STARTED || text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *boton_pago1* updates
    if (t >= 0.0 && boton_pago1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_pago1.tStart = t;  // (not accounting for frame time here)
      boton_pago1.frameNStart = frameN;  // exact frame index
      
      boton_pago1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_pago1.status === PsychoJS.Status.STARTED || boton_pago1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_pago1.setAutoDraw(false);
    }
    // *mouse_pago1* updates
    if (t >= 0.0 && mouse_pago1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pago1.tStart = t;  // (not accounting for frame time here)
      mouse_pago1.frameNStart = frameN;  // exact frame index
      
      mouse_pago1.status = PsychoJS.Status.STARTED;
      mouse_pago1.mouseClock.reset();
      prevButtonState = mouse_pago1.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_pago1.status === PsychoJS.Status.STARTED || mouse_pago1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_pago1.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_pago1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pago1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_pago1)]) {
            if (obj.contains(mouse_pago1)) {
              gotValidClick = true;
              mouse_pago1.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    pago1Components.forEach( function(thisComponent) {
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


function pago1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pago1'-------
    pago1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_pago1.getPos();
    _mouseButtons = mouse_pago1.getPressed();
    psychoJS.experiment.addData('mouse_pago1.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_pago1.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_pago1.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_pago1.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_pago1.rightButton', _mouseButtons[2]);
    if (mouse_pago1.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_pago1.clicked_name', mouse_pago1.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var n_precio_sujeto;
var precio_sujeto_pos;
var precio_sujeto;
var mensaje_precio_sujeto;
var imagen_estimulo;
var pago2Components;
function pago2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pago2'-------
    t = 0;
    pago2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    var mensaje_precio_sujeto, n_precio_sujeto, precio_sujeto, precio_sujeto_pos;
    n_precio_sujeto = Math.random();
    precio_sujeto_pos = Math.round((n_precio_sujeto * nuestro_slider.length));
    precio_sujeto = Number.parseInt(Math.round((nuestro_slider[precio_sujeto_pos] * 1000))-1000);
    mensaje_precio_sujeto = `El precio seleccionado aleatoriamente de sus respuestas es ${precio_sujeto}.`;
    imagen_estimulo= image_slider[precio_sujeto_pos]
    text_4.setText(mensaje_precio_sujeto);
    // setup some python lists for storing info about the mouse_pago2
    mouse_pago2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    pago2Components = [];
    pago2Components.push(text_4);
    pago2Components.push(boton_pago2);
    pago2Components.push(mouse_pago2);
    
    pago2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_4.status === PsychoJS.Status.STARTED || text_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    // *boton_pago2* updates
    if (t >= 0.0 && boton_pago2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_pago2.tStart = t;  // (not accounting for frame time here)
      boton_pago2.frameNStart = frameN;  // exact frame index
      
      boton_pago2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_pago2.status === PsychoJS.Status.STARTED || boton_pago2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_pago2.setAutoDraw(false);
    }
    // *mouse_pago2* updates
    if (t >= 0.0 && mouse_pago2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pago2.tStart = t;  // (not accounting for frame time here)
      mouse_pago2.frameNStart = frameN;  // exact frame index
      
      mouse_pago2.status = PsychoJS.Status.STARTED;
      mouse_pago2.mouseClock.reset();
      prevButtonState = mouse_pago2.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_pago2.status === PsychoJS.Status.STARTED || mouse_pago2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_pago2.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_pago2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pago2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_pago2)]) {
            if (obj.contains(mouse_pago2)) {
              gotValidClick = true;
              mouse_pago2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    pago2Components.forEach( function(thisComponent) {
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


function pago2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pago2'-------
    pago2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('product', imagen_estimulo)
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_pago2.getPos();
    _mouseButtons = mouse_pago2.getPressed();
    psychoJS.experiment.addData('mouse_pago2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_pago2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_pago2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_pago2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_pago2.rightButton', _mouseButtons[2]);
    if (mouse_pago2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_pago2.clicked_name', mouse_pago2.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var productoComponents;
function productoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'producto'-------
    t = 0;
    productoClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    image.setImage(imagen_estimulo);
    // setup some python lists for storing info about the mouse_producto
    mouse_producto.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    productoComponents = [];
    productoComponents.push(text_producto);
    productoComponents.push(image);
    productoComponents.push(boton_producto);
    productoComponents.push(mouse_producto);
    
    productoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image.status === PsychoJS.Status.STARTED || image.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *boton_producto* updates
    if (t >= 0.0 && boton_producto.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_producto.tStart = t;  // (not accounting for frame time here)
      boton_producto.frameNStart = frameN;  // exact frame index
      
      boton_producto.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_producto.status === PsychoJS.Status.STARTED || boton_producto.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_producto.setAutoDraw(false);
    }
    // *mouse_producto* updates
    if (t >= 0.0 && mouse_producto.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_producto.tStart = t;  // (not accounting for frame time here)
      mouse_producto.frameNStart = frameN;  // exact frame index
      
      mouse_producto.status = PsychoJS.Status.STARTED;
      mouse_producto.mouseClock.reset();
      prevButtonState = mouse_producto.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_producto.status === PsychoJS.Status.STARTED || mouse_producto.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_producto.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_producto.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_producto.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_producto)]) {
            if (obj.contains(mouse_producto)) {
              gotValidClick = true;
              mouse_producto.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    productoComponents.forEach( function(thisComponent) {
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


function productoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'producto'-------
    productoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_producto.getPos();
    _mouseButtons = mouse_producto.getPressed();
    psychoJS.experiment.addData('mouse_producto.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_producto.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_producto.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_producto.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_producto.rightButton', _mouseButtons[2]);
    if (mouse_producto.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_producto.clicked_name', mouse_producto.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var diferencia;
var mensaje1;
var pago3Components;
function pago3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pago3'-------
    t = 0;
    pago3Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    diferencia = (20000 - precio_sujeto);
    if ((precio_sujeto > precio_aleatorio)) {
        mensaje1 = `Usted ha ganado ${diferencia} pesos y el producto por el cuál subastó`;
    } else {
        mensaje1 = `Usted ha ganado 20.000 pesos`;
    }
    
    texto_final.setText(mensaje1);
    // setup some python lists for storing info about the mouse_pago3
    mouse_pago3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    pago3Components = [];
    pago3Components.push(texto_final);
    pago3Components.push(boton_pago3);
    pago3Components.push(mouse_pago3);
    
    pago3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((texto_final.status === PsychoJS.Status.STARTED || texto_final.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      texto_final.setAutoDraw(false);
    }
    
    // *boton_pago3* updates
    if (t >= 0.0 && boton_pago3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_pago3.tStart = t;  // (not accounting for frame time here)
      boton_pago3.frameNStart = frameN;  // exact frame index
      
      boton_pago3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_pago3.status === PsychoJS.Status.STARTED || boton_pago3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_pago3.setAutoDraw(false);
    }
    // *mouse_pago3* updates
    if (t >= 0.0 && mouse_pago3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pago3.tStart = t;  // (not accounting for frame time here)
      mouse_pago3.frameNStart = frameN;  // exact frame index
      
      mouse_pago3.status = PsychoJS.Status.STARTED;
      mouse_pago3.mouseClock.reset();
      prevButtonState = mouse_pago3.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_pago3.status === PsychoJS.Status.STARTED || mouse_pago3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_pago3.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_pago3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pago3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_pago3)]) {
            if (obj.contains(mouse_pago3)) {
              gotValidClick = true;
              mouse_pago3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    pago3Components.forEach( function(thisComponent) {
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


function pago3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pago3'-------
    pago3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('mensaje', mensaje1)
    
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_pago3.getPos();
    _mouseButtons = mouse_pago3.getPressed();
    psychoJS.experiment.addData('mouse_pago3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_pago3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_pago3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_pago3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_pago3.rightButton', _mouseButtons[2]);
    if (mouse_pago3.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_pago3.clicked_name', mouse_pago3.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var intro_encuestaComponents;
function intro_encuestaRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro_encuesta'-------
    t = 0;
    intro_encuestaClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_intro_encuesta
    mouse_intro_encuesta.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    intro_encuestaComponents = [];
    intro_encuestaComponents.push(text_2);
    intro_encuestaComponents.push(boton_intro_encuesta);
    intro_encuestaComponents.push(mouse_intro_encuesta);
    
    intro_encuestaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_2.status === PsychoJS.Status.STARTED || text_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // *boton_intro_encuesta* updates
    if (t >= 0.0 && boton_intro_encuesta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boton_intro_encuesta.tStart = t;  // (not accounting for frame time here)
      boton_intro_encuesta.frameNStart = frameN;  // exact frame index
      
      boton_intro_encuesta.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((boton_intro_encuesta.status === PsychoJS.Status.STARTED || boton_intro_encuesta.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      boton_intro_encuesta.setAutoDraw(false);
    }
    // *mouse_intro_encuesta* updates
    if (t >= 0.0 && mouse_intro_encuesta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_intro_encuesta.tStart = t;  // (not accounting for frame time here)
      mouse_intro_encuesta.frameNStart = frameN;  // exact frame index
      
      mouse_intro_encuesta.status = PsychoJS.Status.STARTED;
      mouse_intro_encuesta.mouseClock.reset();
      prevButtonState = mouse_intro_encuesta.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mouse_intro_encuesta.status === PsychoJS.Status.STARTED || mouse_intro_encuesta.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mouse_intro_encuesta.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_intro_encuesta.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_intro_encuesta.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [(boton_intro_encuesta)]) {
            if (obj.contains(mouse_intro_encuesta)) {
              gotValidClick = true;
              mouse_intro_encuesta.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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
    intro_encuestaComponents.forEach( function(thisComponent) {
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


function intro_encuestaRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro_encuesta'-------
    intro_encuestaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_intro_encuesta.getPos();
    _mouseButtons = mouse_intro_encuesta.getPressed();
    psychoJS.experiment.addData('mouse_intro_encuesta.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_intro_encuesta.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_intro_encuesta.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_intro_encuesta.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_intro_encuesta.rightButton', _mouseButtons[2]);
    if (mouse_intro_encuesta.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_intro_encuesta.clicked_name', mouse_intro_encuesta.clicked_name[0]);}
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

var shuffleSequence = sepWith("sep", not("sep"));
var centerItems = true;

var defaults = [
  "Question", {
    as: ["Yes", "No"]
  },
  //the deault options can
  //be changed to any other options you would like to present
  "DashedSentence", {
    mode: "speeded acceptability"
  },
  //These settings are needed for audio Type 1
  "AcceptabilityJudgment", {
    // q: 'What did u hear?',
    as: ["OK"],
    presentAsScale: true,
    instructions: "Use number keys or click boxes to answer.",
    // leftComment: "(Bad)",
    // rightComment: "(Good)",
    //only two audio options available so far
    audioMessage: {
      html: "<u>Click here to play audio</u>"
    },
    audioTrigger: "click"
  } //do not change this
  //click, we do have another option at this point of time
];

var items = [
  // Change the transfer to the number of milliseconds you want in between questions
  // and change your normalMessage according to what you want the client
  // to see while this break
  ["sep", "Separator", {
    transfer: 5,
    normalMessage: "Please wait for the next item."
  }],
  //The following are text followed by questions
  //You can create more instances of these by just adding more such arrays
  //DashedSentence can be changed to FlashSentence
  //another convenient way of doing this using AcceptabilityJudgment and
  //its dash sentence version DashedAcceptibilityJudgment
  ["q1", "DashedSentence", {
      s: "Your text here"
    },
    "Question", {
      q: "Your Question here"
    }
  ],
  //Type 1 audio, this is for when you don't want participants
  //to contol when to pause, this is just when the participant is ready,
  //they click and the audio plays without any interruption.
  //So in essential, you want to force participant to hear the entire audio
  //the audio file must be in chunk_includes
  ["q2", "AcceptabilityJudgment", {
    s: {
      audio: "test1.mp3"
    }
  }],

  // Just to check if participant can hear audio or No
  ["q3", "Question", {
    q: 'Did you hear anything?'
  }],

  //Type 2 audio, autoplay, press a button to continue at any time
  //participant can pause/play as many times as possible

  ["q4", "Message", {
    html: {
      include: 'sound_display.html'
    },
    // conosentRequired: "true",
    // continueMessage: "Click here to contiue",
    transfer: 'click'
  }],

  //Type 3 audio, pausable version, not able to pause/play audio
  //just press any key to continue at any time
  //for example, press any key as soon as sentence stops making sense

  ["q5", "Message", {
    html: {
      include: 'sound_nodisplay.html'
    },
    transfer: 'keypress'
  }]



];

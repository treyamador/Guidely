/* parses highlight markup */

class HighlightParser {
  constructor() {

  }

  rgbToHex = (rgb) => {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  /*
  save = () => {
    let consec_words = [];
    let prev_color = 'transparent';
    let start_run = 0;
    let words = $('.page__text').find('.word');
    words.each((i, word_html) => {
      let word = $(word_html);
      // TODO: make 'rgba(0, 0, 0, 0) cross-browser compatible
      let color = 'transparent';
      if (word.css('background-color') != 'rgba(0, 0, 0, 0)') {
        color = this.rgbToHex(word.css('background-color'));
      }
      if (color === 'transparent' || color !== prev_color) {
        if (start_run > i) {
          consec_words.push({
            start: start_run,
            run: i - start_run,
            color: color
          });
        }
        start_run = i+1;
      }
      prev_color = color;
    });

    if (start_run !== words.length) {
      consec_words.push({
        start: start_run,
        run: words.length - start_run,
        color: prev_color
      });
    }

    // TODO remove, for debugging
    words.each((i, word_html) => {
      let word = $(word_html);
      for (let j = 0; j < consec_words.length; ++j) {
        let consec = consec_words[j];
        if (i >= consec.start && i <= consec.start + consec.run) {
          console.log(word.text(), consec.color);
        }
      }
    });
    console.log(consec_words.length);
  }

  */

  save = () => {
    let consec = [];
    let words = $('.page__text').find('.word');
    words.each((i, word_html) => {
      let bg = $(word_html).css('background-color');
      if (bg !== 'rgba(0, 0, 0, 0)')
        consec.push({ color: this.rgbToHex(bg), start: i, end: i });
    });
    let i = 0;
    while (i < consec.length-1) {
      if (consec[i].color === consec[i+1].color && consec[i].end+1 == consec[i+1].start) {
        consec[i].end = consec[i+1].end;
        consec.splice(i+1, 1);
      } else {
        ++i;
      }
    }

  }


  saveListener = () => {
    $('#save-highlighting').click(() => {
      this.save();  
    });
  } 
}

$(document).ready(() => {
  let parser = new HighlightParser();
  parser.saveListener();
});

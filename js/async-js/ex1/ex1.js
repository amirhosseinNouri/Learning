function fakeAjax(url, cb) {
  var fake_responses = {
    file1: 'The first text',
    file2: 'The middle text',
    file3: 'The last text',
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log('Requesting: ' + url);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
  fakeAjax(file, function (text) {
    handleResponse(file, text);
  });
}

const files = ['file1', 'file2', 'file3'];
function handleResponse(filename, content) {
  if (!(filename in responses)) {
    responses[filename] = content;
  }

  for (var i = 0; i < files.length; i++) {
    var currentFile = files[i];
    if (currentFile in responses) {
      if (typeof responses[currentFile] == 'string') {
        output(responses[currentFile]);
        responses[currentFile] = false;
      }
    } else {
      return;
    }
  }

  output('Complete');
}

var responses = {};

// request all files at once in "parallel"
getFile('file1');
getFile('file2');
getFile('file3');

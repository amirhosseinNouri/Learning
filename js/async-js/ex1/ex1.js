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

function handleResponse(filename, content) {
  if (!filename in responses) {
    responses[filename] = content;
  }
  var filenames = ['file1', 'file2', 'file3'];
  for (var i = 0; i < filename.length; i++) {
    if (filenames[i] in responses) {
      if (typeof responses[filenames[i]] == 'string') {
        output(responses[filenames[i]]);
        responses[filenames[i]] = false;
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

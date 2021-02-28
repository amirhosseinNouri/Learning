const worker = new Worker('task.js')
worker.addEventListener('message', function(e) {
    console.log('Worker said: ', e.data);
  }, false);
  
worker.postMessage('Hello World');
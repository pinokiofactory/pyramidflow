module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      when: "{{platform !== 'darwin'}}",
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/peanutcocktail/Pyramid-Flow app",
        ]
      }
    },
    {
      when: "{{platform === 'darwin'}}",
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/betapeanut/Pyramid-Flow app",
        ]
      }
    },
    {
      when: "{{platform === 'darwin'}}",
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "git fetch --all",
          "git checkout use_mps_on_apple_silicon"
        ]
      }
    },
//    {
//      method: "shell.run",
//      params: {
//        message: [
//          "git clone https://github.com/jy0205/Pyramid-Flow app",
//        ]
//      }
//    },
//    {
//      when: "{{platform === 'darwin'}}",
//      method: "shell.run",
//      params: {
//        path: "app",
//        message: [
//          "git fetch origin pull/113/head:use_mps_on_apple_silicon",
//          "git switch use_mps_on_apple_silicon"
//        ]
//      }
//    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install gradio",
          "pip install -r requirements.txt"
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      when: "{{platform !== 'darwin'}}",
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
}

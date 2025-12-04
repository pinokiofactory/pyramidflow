module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      when: "{{platform !== 'darwin'}}",
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/jy0205/Pyramid-Flow app",
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
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install gradio==5.50.0",
          "uv pip install -r requirements.txt"
        ]
      }
    },
    {
      when: "{{platform !== 'darwin'}}",
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
        }
      }
    }
  ]
}

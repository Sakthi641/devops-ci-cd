module.exports = {
    apps: [
      {
        name: 'react-app',
        script: 'node_modules/serve/bin/serve',
        args: '-s dist -p 4173',
        cwd: '~/workspace/Devops-Training/dist',
        instances: 1,
        exec_mode: 'fork',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  
<!-- markdownlint-disable MD002 MD041 -->

In this section you'll create a new Vue app.

1. Open your command-line interface (CLI), navigate to a directory where you have rights to create files, and run the following commands to create a new Vue app with Vue-CLI.

    ```Shell
    npm install -g @vue/cli @vue/cli-service-global
    ```

    or

    ```Shell
    yarn global add @vue/cli @vue/cli-service-global
    ```

    and execute:

    ```Shell
    vue create graph-tutorial
    ```

    Select `Manually select features` and choice `Babel, Router, Vuex, Linter / Formatter`

    Choose as other preferences you like and wait for the project to be created

2. Once the command finishes, change to the `graph-tutorial` directory in your CLI and run the following command to start a local web server.

    ```Shell
    cd graph-tutorial
    npm run serve
    ```

Your default browser opens to [https://localhost:8000/](https://localhost:8000) with a default Vue page.

## Add Node packages

Before moving on, install some additional packages that you will use later:

- [microsoft-graph-client](https://github.com/ReactTraining/react-router) for declarative routing inside the React app.
- [msal](https://github.com/twbs/bootstrap) for styling and common components.
- [vuetify](https://github.com/reactstrap/reactstrap) for React components based on Bootstrap.

Run the following command in your CLI.

```Shell
npm install @microsoft/microsoft-graph-client
npm instal msal
vue add vuetify
```

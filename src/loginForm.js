export default {
    id: "login_form",
    title: "Welcome to Foo!",
    sections: [
      {
        id: "section_1",
        title: "Login Section",
        subsections: [
          {
            id: "subsection_1",
            title: "Login",
            subtitle: "Please enter your credentials.",
            fields: [
              {
                id: "user_name",
                title: "Username",
                type: "string"
              },
              {
                id: "user_pass",
                title: "Password",
                type: "string"
              },
              {
                id: "remember_me",
                title: "Remember me",
                type: "boolean"
              }
            ]
          }
        ]
      }
    ],
    decorators: {
      "user_pass": {
        component: {
          type: "password"
        }
      }
    }
  };
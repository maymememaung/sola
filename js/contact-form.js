// Contact form — client-side validation
// TODO: implement this yourself as a learning exercise
//
// The form has three fields: name, email, message.
// Each .form-group has a sibling .form-group__error-msg already in the HTML.
// The CSS class .form-group--error (on the .form-group) makes the error visible.
//
// Steps:
// 1. Select the form (.contact-form) and each input/textarea by id
// 2. Listen for the 'submit' event on the form; call event.preventDefault()
// 3. Write a validate() function that checks:
//    - name: not empty after trimming whitespace
//    - email: matches a basic email pattern (hint: use a regex or input.validity.valid)
//    - message: at least 10 characters after trimming
// 4. For each failing field, add .form-group--error to its parent .form-group
//    For each passing field, remove .form-group--error
// 5. If all fields are valid, hide the form and show .form-success
//
// Bonus: validate a field on 'blur' (when the user leaves it) for instant feedback
//
// Tip: export your validate() function so it can be unit-tested:
//   export function validate(name, email, message) { … }

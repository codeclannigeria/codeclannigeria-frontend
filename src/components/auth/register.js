import React from 'react';

function register() {
  return (
    <div>
      <div class="main">
        <div class="left">
          <div class="logo">
            <div>
              <img src="CODE2.png" />
            </div>
          </div>
          <div class="titles">Login to your account</div>
          <form>
            <AlertComponent variant="danger" text={errResponse} />
            <div class="block">
              <div className="nameInputGroup">
                <label htmlFor="fullName">Full Name</label>
                <Field
                  name="fullName"
                  id="fullName"
                  className={
                    touched.fullName && errors.fullName
                      ? errorClassNames
                      : validClassNames
                  }
                  type="text"
                />
                <div className="d-block text-monospace text-danger small-text">
                  <ErrorMessage name="fullName" className="d-block" />
                </div>
              </div>
            </div>
            <div className="block">
              <input
                id="email"
                type="email"
                className={
                  touched.email && errors.email
                    ? errorClassNames
                    : validClassNames
                }
              />
              <span>
                <i class="fa fa-at" aria-hidden="true"></i>
              </span>
              <div className="d-block text-monospace text-danger small-text">
                <ErrorMessage name="email" className="d-block" />
              </div>
            </div>
            <div class="block">
              <input
                id="password"
                name="password1"
                className={
                  touched.password1 && errors.password1
                    ? errorClassNames
                    : validClassNames
                }
                type="password"
              />
              <span>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
              <div className="d-block text-monospace text-danger small-text">
                <ErrorMessage name="password1" className="d-block" />
              </div>
            </div>

            <div class="block">
              <input
                id="password"
                name="password2"
                className={
                  touched.password2 && errors.password2
                    ? errorClassNames
                    : validClassNames
                }
                type="password"
              />
              <span>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
              <div className="d-block text-monospace text-danger small-text">
                <ErrorMessage name="password2" className="d-block" />
              </div>
            </div>

            <button
              disabled={loading}
              className={loading ? 'btn btn-light w-100' : 'submit'}
              type="submit"
            >
              {!loading ? (
                'get started'
              ) : (
                <span>
                  <Spinner animation="border" variant="primary" /> Signing
                  up....
                </span>
              )}
            </button>
            <div class="centralize" style="line-height: 2em;">
              <p>
                Don't have an account? <a href="signup.html">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
        <div class="right">
          <img src="./assets/images/login.jpg" style="height: 50%;" />
          <p class="small">CODECLAN NIGERIA</p>
          <p class="normal">
            Join us and take your programming career to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default register;

import React, { useState } from 'react';
import SubmitTaskStyled from './submitTaskStyled';
import DashboardLayout from '../../common/DashboardLayout';
import SuccessfulSubmission from '../../common/SuccessfulSubmission';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SubmitTask(props) {
  const [submitted, setSubmitted] = useState(false);
  const { id } = props.match.params;

  if (submitted) {
    const data = {
      header: `Successfully sumitted Task #${id}`,
      description:
        'Your mentor will review your submission and will get back to you',
      backLink: '/dashboard/pending-task',
      id,
    };
    return <SuccessfulSubmission data={data} />;
  }
  return (
    <SubmitTaskStyled>
      <div class="container-fluid mt-5 py-3">
        <div class="row">
          <div class="col-md-5 col-sm-12">
            <div class="card mb-3 tasks" style={{ maxWidth: '23rem' }}>
              <div class="card-header font-weight-bold">Task {id}</div>
              <div class="card-body px-5">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum tortor risus, in eu. Quis bibendum libero tellus
                  vestibulum convallis arcu.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-sm-12 submitTask">
            <div class="card">
              <h5 class="submit-card-header"> Submit Task</h5>
              <div class="card-body">
                <Formik
                  initialValues={{ url: '', comments: '' }}
                  validationSchema={Yup.object({
                    url: Yup.string()
                      .url('Enter a valid URL')
                      .required('Enter the URL you wish to submit'),
                    comments: Yup.string(),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    const { url, comments } = values;
                    alert(url, comments);
                    console.log(values);

                    setSubmitted(true);
                  }}
                >
                  {({ errors, touched, isSubmmiting }) => (
                    <Form>
                      <div class="form-group mt-5">
                        <label for="FormControlInput font-weight-bold">
                          Url
                        </label>
                        <Field
                          name="url"
                          class="urlInput form-control"
                          id="FormControlInput"
                          placeholder="Provide the link to your task"
                          type="url"
                        />
                        <div className="d-block text-monospace text-danger small-text">
                          <ErrorMessage name="url" className="d-block" />
                        </div>
                      </div>
                      <a href="#">Submission Guidelines</a>

                      <div class="form-group mt-5">
                        <label for="FormControlTextarea font-weight-bold">
                          Comments
                        </label>
                        <Field
                          class="form-control "
                          id="FormControlTextarea"
                          placeholder="Include any challenges encounter"
                          rows="5"
                          as="textarea"
                          name="comments"
                        />
                        <div className="d-block text-monospace text-danger small-text">
                          <ErrorMessage name="comments" className="d-block" />
                        </div>
                      </div>
                      <p class="text-center">
                        <input
                          value="SUBMIT TASK"
                          type="submit"
                          class="btn btn-lg btn-primary w-75 text-center mt-5 mb-5"
                        />
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubmitTaskStyled>
  );
}

export default DashboardLayout(SubmitTask);

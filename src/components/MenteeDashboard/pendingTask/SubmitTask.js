import React, { useState, useEffect, useCallback } from 'react';
import SubmitTaskStyled from './submitTaskStyled';
import DashboardLayout from '../../common/DashboardLayout';
import SuccessfulSubmission from '../../common/SuccessfulSubmission';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  submitTaskAction,
  getSingleTaskAction,
} from '../../../state/tasks/tasksActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, message } from 'antd';
import { Link } from 'react-router-dom';

function SubmitTask(props) {
  const [submitted, setSubmitted] = useState(false);
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const { error, errResponse, taskSubmit, loading } = tasks;

  const fetchData = useCallback(async () => {
    await dispatch(getSingleTaskAction(id));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error, errResponse]);

  if (submitted && taskSubmit === 'success') {
    const data = {
      header: `Successfully sumitted Task #${id}`,
      description:
        'Your mentor will review your submission and will get back to you',
      backLink: '/dashboard/pending-task',
      id,
    };
    return <SuccessfulSubmission data={data} />;
  }
  const errorClassNames = 'border input border-danger';
  const validClassNames = 'border input border-green';
  return (
    <SubmitTaskStyled>
      <div className="container-fluid mt-5 py-3">
        <Link
          to={`/dashboard/pending-task/${id}`}
          className="btn btn-outline-primary btn-sm mb-3 "
        >
          <i className="fas fa-arrow-left"></i> Back to Task Brief
        </Link>
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="card mb-3 tasks" style={{ maxWidth: '23rem' }}>
              <div className="card-header font-weight-bold">Task id {id}</div>
              <div className="card-body px-5">
                <p className="card-text">
                  {tasks.singleTask ? tasks.singleTask.title : <Spin />}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 submitTask">
            <div className="card">
              <h5 className="submit-card-header"> Submit Task</h5>
              <div className="card-body">
                <Formik
                  initialValues={{ url: '', comments: '' }}
                  validationSchema={Yup.object({
                    url: Yup.string()
                      .url('Enter a valid URL')
                      .required('Enter the URL you wish to submit'),
                    comments: Yup.string().min(15),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    const { url, comments } = values;
                    dispatch(submitTaskAction(id, url, comments));
                    setSubmitted(true);
                  }}
                >
                  {({ errors, touched, isSubmmiting }) => (
                    <Form>
                      <div className="form-group mt-5">
                        <label for="FormControlInput font-weight-bold">
                          Url
                        </label>
                        <Field
                          name="url"
                          className={`urlInput form-control ${
                            touched.url && errors.url
                              ? errorClassNames
                              : validClassNames
                          }`}
                          id="FormControlInput"
                          placeholder="Provide the link to your task"
                          type="url"
                        />
                        <div className="d-block text-monospace text-danger small-text">
                          <ErrorMessage name="url" className="d-block" />
                        </div>
                      </div>
                      {/* <a href="/">Submission Guidelines</a> */}

                      <div className="form-group mt-5">
                        <label for="FormControlTextarea font-weight-bold">
                          Comments
                        </label>
                        <Field
                          className={`form-control ${
                            touched.comments && errors.comments
                              ? errorClassNames
                              : validClassNames
                          } `}
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
                      <p className="text-center">
                        {!loading ? (
                          <input
                            value="SUBMIT TASK"
                            type="submit"
                            className="btn btn-lg btn-primary w-75 text-center mt-5 mb-5"
                          />
                        ) : (
                          <span>
                            <Spin /> Submitting ....
                          </span>
                        )}
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

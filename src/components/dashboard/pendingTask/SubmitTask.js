import React, { useState } from 'react';
import SubmitTaskStyled from './submitTaskStyled';
import DashboardLayout from '../../common/DashboardLayout';
import SuccessfulSubmission from '../../common/SuccessfulSubmission';

function SubmitTask(props) {
  const [submitted, setSubmitted] = useState(false);
  const { id } = props.match.params;

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitted(true);
  };
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
            <div
              class="card border-light mb-3 tasks"
              style={{ maxWidth: '23rem', height: 40 }}
            >
              <div class="card-header font-weight-bold">Task 3</div>
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
              <h5 class="card-header font-weight-bold"> Submit Task - Day 3</h5>
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group mt-5">
                    <label for="FormControlInput font-weight-bold">Url</label>
                    <input
                      type="url"
                      class="form-control"
                      id="FormControlInput"
                      placeholder="Provide the link to your task"
                    />
                  </div>
                  <a href="#">Submission Guidelines</a>

                  <div class="form-group mt-5">
                    <label for="FormControlTextarea font-weight-bold">
                      Comments
                    </label>
                    <textarea
                      class="form-control "
                      id="FormControlTextarea"
                      placeholder="Include any challenges encounter"
                      rows="5"
                    ></textarea>
                  </div>
                  <p class="text-center">
                    <input
                      value="SUBMIT TASK"
                      type="submit"
                      class="btn btn-primary w-75 text-center mt-5 mb-5"
                    />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubmitTaskStyled>
  );
}

export default DashboardLayout(SubmitTask);

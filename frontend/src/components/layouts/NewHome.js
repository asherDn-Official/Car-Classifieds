export default function NewHome() {
  return (
    <divv>
      <div className="container-container-fluid">
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form className="shadow-lg" encType="multipart/form-data">
              <h1 className="mt-2 mb-5">Update Profile</h1>

              <div className="form-group">
                <label htmlFor="email_field">Name</label>
                <input
                  type="name"
                  id="name_field"
                  className="form-control"
                  name="name"
                  value=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  name="email"
                  value=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="avatar_upload">Avatar</label>
                <div className="d-flex align-items-center">
                  <div>
                    <figure className="avatar mr-3 item-rtl">
                      <img
                        src="./images/profile.jpg"
                        className="rounded-circle"
                        alt="Avatar Preview"
                      />
                    </figure>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      name="avatar"
                      className="custom-file-input"
                      id="customFile"
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Avatar
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn update-btn btn-block mt-4 mb-3"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </divv>
  );
}

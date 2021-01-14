class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    const {
      avatar_url,
      public_repos,
      public_gists,
      followers,
      following,
      company,
      blog,
      location,
      created_at,
      html_url,
    } = user;

    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${avatar_url}" alt="img" class="img-fluid mb-2">
                <a href="${html_url}" target="_blank" class="btn btn-primary mb-4 btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="btn btn-primary">Public Repos:  ${public_repos}</span>
                    <span class="btn btn-secondary">Public Gist:  ${public_gists}</span>
                    <span class="btn btn-success">Followers:  ${followers}</span>
                    <span class="btn btn-info">Following:  ${following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company:  ${company}</li>
                        <li class="list-group-item">Website/Blog:  ${blog}</li>
                        <li class="list-group-item">Location:  ${location}</li>
                        <li class="list-group-item">Memeber:  ${created_at}</li>

                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Lastest Repos</h3>
        <div id="repos"></div>
        `;
  }

  showRepos(repos){
    let output = '';

    repos.forEach((repo)=>{
      output += ` <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>

        <div class="col-md-6">
            <span class="btn btn-primary">Stars:  ${repo.stargazers_count}</span>
            <span class="btn btn-secondary">Watchers:  ${repo.watchers_count}</span>
            <span class="btn btn-success">FForks:  ${repo.forms_count}</span>
        </div>

      </div>
    </div>`
    });

    document.getElementById('.repos').innerHTML;
  }

  clearProfile(){
    this.profile.innerHTML = '';
  }

  showAlert(message, classname){
    this.clearAlert();
    const div = document.querySelector('div');
    div.className = classname;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);
    setTimeout(()=>{
      this.clearAlert();
    }, 3000)
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
}

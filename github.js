class Github {
  constructor() {
    this.ID = "0255f58cfdaf9697238f";
    this.secret_ID = "ed5adc1e0f2bbb421d4a49c0d4a10a38b1499f3b";
    this.repo_count = 5;
    this.repo_sort = "created: asc"
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.ID}&client_secret=${this.secret_ID}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}?per_pages${this.repo_count}&client_sort${this.repo_sort}&client_id=${this.ID}&client_secret=${this.secret_ID}/repos`
    );
    const repo = await repoResponse.json();
    const profile = await profileResponse.json();

    return {
      profile,
      repo
    };
  }
}

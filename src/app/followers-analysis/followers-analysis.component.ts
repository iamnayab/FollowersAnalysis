import { Component } from '@angular/core';

@Component({
  selector: 'app-followers-analysis',
  templateUrl: './followers-analysis.component.html',
  styleUrls: ['./followers-analysis.component.css']
})
export class FollowersAnalysisComponent {
  followersData: any = null;
  followingData: any = null;

  totalFollowing = 0;
  totalFollowers = 0;
  notFollowingBack: string[] = [];
  resultReady = false;
  loading = false;

  onFileSelected(event: any, fileType: string) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = JSON.parse(e.target?.result as string);
        if (fileType === 'followers') {
          this.followersData = result;
        } else if (fileType === 'following') {
          this.followingData = result;
        }
      } catch (error) {
        console.error("Invalid JSON file:", error);
      }
    };
    reader.readAsText(file);
  }

  calculateResults() {
    if (!this.followersData || !this.followingData) return;

    this.loading = true;
    this.resultReady = false;

    setTimeout(() => {
      // Extract Following and Followers
      const followingUsernames = this.followingData?.relationships_following?.flatMap((item: any) =>
        item.string_list_data.map((d: any) => d.value)
      ) || [];

      const followerUsernames = this.followersData?.flatMap((item: any) =>
        item.string_list_data.map((d: any) => d.value)
      ) || [];

      // Calculate Results
      this.totalFollowing = followingUsernames.length;
      this.totalFollowers = followerUsernames.length;
      this.notFollowingBack = followingUsernames.filter((username: any) => !followerUsernames.includes(username));

      this.loading = false;
      this.resultReady = true;
    }, 2000); // Simulate delay for loader effect
  }
}

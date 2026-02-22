import {expect, testStep } from '../../../common/helpers/pw';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.profileHeader = page.locator('.user-info');
    this.profileUsername = this.profileHeader.locator('h4');
    this.profileBio = this.profileHeader.locator('p');
    this.profileImage = this.profileHeader.getByRole('img', { name: "User's profile image" });
  }

  async step(title, stepToRun) {
      return await testStep(title, stepToRun, this.userId);
    };



  async assertProfileImage(url) {
        await this.step(`Assert the 'Profile picture' has correct url'`, async () => {
          await expect(this.profileImage).toHaveAttribute('src', url);
        });
      }
  
    async assertProfileUsernameField(username) {
        await this.step(`Assert the 'Username' has correct username'`, async () => {
          await expect(this.profileUsername).toHaveText(username);
        });
      }
  
    async assertProfileBio(bio) {
        await this.step(`Assert the 'Short bio about you' has correct bio'`, async () => {
          await expect(this.profileBio).toHaveText(bio);
        });
      }
  


}
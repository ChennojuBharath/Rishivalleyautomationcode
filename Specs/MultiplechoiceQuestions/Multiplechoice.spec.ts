import { browser, by, element, ExpectedConditions } from 'protractor';
import { tasksPage } from '../../Pages/multiplechoicePage.po';

describe('Tapping MCQ Tasks Creation', () => {
    let taskPg: tasksPage
    taskPg = new tasksPage();
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create task flow check for TapingMCQ with Text to Text', () => {
        taskPg.createTappingMCQTasktexttelugu();
    });

    it('To Search data in list of tasks', () => {
        taskPg.SearchTaskfromlist();
    });
    it('Verify MCQ task can be updated', () => {
        taskPg.UpdateMCQ();
    });
    it('Closing the task popup using cancel button', () => {
        taskPg.CancelTask();
    });
    it('Check for the content type search', () => {
        taskPg.Contenttypesearch();
    });
 
    it('Check the task preview page back button', () => {
        taskPg.Previewbackbutton();
    });
    it('Check the task publish page back button', () => {
        taskPg.Publishbackbutton();
   })
   it('Check the task preview page breadcrumbs are working', () => {
    taskPg.Previewbreadcrumbs()
  });
  it('Check the task publish page breadcrumbs are working', () => {
    taskPg.Publishbreadcrmbs();
  }) 
  
})
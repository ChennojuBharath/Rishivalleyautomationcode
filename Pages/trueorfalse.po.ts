import { browser, by, element, Key, WebElement } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
import { Driver } from 'selenium-webdriver/chrome';
var path = require('path');

export class trueorfalsePage {
    createNewTaskBtn() {
        return element(by.xpath("//span[text()=' Create New Task ']"));
    }
    TrueorfalseLink() {
        return element(by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='True or False']"));
    }
    Activityid() {
        return element(by.xpath("//input[@id='activityid']"));
    }
    selectSubject() {
        return element(by.xpath('//select[@name="subjectNames"]'));
    }
    addSlide() {
        return element(by.xpath("//div[@class='add-slide ng-star-inserted']"));
    }
    commentbutton() {
        return element(by.xpath("(//span[contains(text(),'Add Comment')])[1]"))
    }
    Commentsavebtn() {
        return element(by.xpath("//span[contains(text(),'SAVE')]"));
    }
    clickOntappingMCQNextBtn() {
        return element(by.xpath("//span[text()='Next ']"))
    }
    okbutton() {
        return element(by.xpath("//button[text()='OK']"))
    }
    Backbtn() {
        return element(by.xpath("//span[contains(text(),'Back')]"))
    }
    Cancelbtn() {
        return element(by.xpath("//div[text()='Cancel']"))
    }
    Canceliconn() {
        return element(by.xpath("//span[text()='×']"))
    }
    TrueOrFalsebreadcrumb() {
        return element(by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' True Or False']"))
    }
    Previewbreadcrumb() {
        return element(by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Preview']"))
    }
    Taskcancelbtn() {
        return element(by.xpath("//span[text()='Cancel']"));
    }
    TaskCancelicon() {
        return element(by.xpath("//button[@class='close mat-icon-button']"));
    }
    Class1() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[contains(text(),'Class 1')]"));
    }
    Norecored() {
        return element(by.xpath("//td[text()=' No record found. ']"));
    }
    plusbutton() {
        return element(by.xpath("//button[text()='+']"));
    }
    publishBtn() {
        return element(by.xpath("//span[contains(text(),'Send To Review')]"))
    }
    succesfulCreationOfTasks() {
        return element(by.xpath("//span[text()='Home']"))
    }
    Audiobutton() {
        return element(by.xpath("//div[.='Upload Audio File']"));
    }
    overallFeedbackCheckbox() {
        return element(by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
    }
    sliderTextBox() {
        return element(by.xpath("//input[@ng-reflect-name='feedbackInfo']"));
    }
    slider() {
        return element(by.xpath("//div[@class='mat-slider-thumb']"));
    }
    Behaviourtext() {
        return element(by.xpath("//div[text()='Behaviour ']"));
    }
    feedbackbox() {
        return element(by.xpath("//input[@formcontrolname='feedbackInfo']"));
    }
    feedbackbox1() {
        return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"));
    }
    feedbackbox2() {
        return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"));
    }
    feedbackbox3() {
        return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"));
    }
    feedbackbox4() {
        return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"));
    }

    OKbtn() {
        return element(by.xpath('//button[.="OK"]'));
    }
    typefile1() {
        return element(by.css('input[type="file"]'))
    }
    typefile2() {
        return element(by.xpath("(//input[@type='file'])[2]"))
    }
    typefile3() {
        return element(by.xpath("(//input[@type='file'])[3]"))
    }
    typefile4() {
        return element(by.xpath("(//input[@type='file'])[4]"))
    }
    typefile5() {
        return element(by.xpath("(//input[@type='file'])[5]"))
    }
    typefile6() {
        return element(by.xpath("(//input[@type='file'])[6]"))
    }
    saveMCQ() {
        return element(by.xpath("//span[contains(text(),'Save')]"))
    }
    acceptSaveTaskPopUp() {
        return element(by.xpath('//button[text()="OK"]'))
    }
    Textradiobtn() {
        return element(by.xpath("//div[text()='Text']"))
    }
    Textradiobtn2() {
        return element(by.xpath("(//div[text()='Text'])[2]"))
    }
    Addquestionbtn() {
        return element(by.xpath("//span[text()='ADD Question +']"))
    }
    Pictureandtextradiobtn() {
        return element(by.xpath("//div[text()='Text and Picture']"))
    }
    Pictureandtextradiobtn2() {
        return element(by.xpath("(//div[text()='Text and Picture'])[2]"))
    }
    Pictureandtextradiobtn3() {
        return element(by.xpath("(//div[text()='Text and Picture'])[3]"))
    }
    Question1() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"))
    }
    Question2() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[2]"))
    }
    Option1() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"))
    }
    Option2() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"))
    }
    Option3() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[3]"))
    }
    Option4() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[4]"))
    }
    Radio1() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[1]"))
    }
    Radio2() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[2]"))
    }
    Radio3() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[7]"))
    }
    Radio4() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[8]"))
    }
    Radio5() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[9]"))
    }
    Radio6() {
        return element(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[14]"))
    }
    Checkbtn() {
        return element(by.xpath("//span[text()='Check']"))
    }
    Previewradio() {
        return element(by.xpath("(//label[@class='mat-radio-label'])[2]"))
    }
    ShowSolutionbtn() {
        return element(by.xpath("//span[text()='Show Solution']"))
    }
    createpageTrueorfalsetasktelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(2000);
                this.TrueorfalseLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["TaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//select[@class='rv-select w-100 ng-untouched ng-pristine ng-valid'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["TrueorfalseTeluguTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["TrueorfalseTeluguInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(10500);
                this.OKbtn().click();
                browser.sleep(500);
                this.overallfeedbacktelugu();
                browser.sleep(500);
                this.Createpagecomments();
                browser.sleep(500);
            })
        }
    }
    Createpagecomments() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["CreatepageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task popup is closed successfully')
                })
            })
        }
    }
    Previewpagecomments() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task popup is closed successfully')
                })
            })
        }
    }
    createpageTrueorfalsetaskenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(1000);
                this.TrueorfalseLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EnglishTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["TrueorfalseEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["TrueorfalseEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(5000);
                browser.actions().mouseMove(this.overallFeedbackCheckbox()).perform();
                this.overallfeedbackenglish();
            })
        }
    }
    createpageTrueorfalsetaskmaths() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(1000);
                this.TrueorfalseLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["MathsTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["TrueorfalseEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["TrueorfalseEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(5000);
                browser.actions().mouseMove(this.overallFeedbackCheckbox()).perform();
                this.overallfeedbackenglish();
            })
        }
    }
    createpageTrueorfalsetaskevs() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(1000);
                this.TrueorfalseLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EvsTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["TrueorfalseEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["TrueorfalseEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(5000);
                browser.actions().mouseMove(this.overallFeedbackCheckbox()).perform();
                this.overallfeedbackenglish();
            })
        }
    }
    overallfeedbackenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.overallFeedbackCheckbox());
                this.overallFeedbackCheckbox().click();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 150, y: 0 }).perform();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 200, y: 0 }).perform();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 250, y: 0 }).perform();
                this.plusbutton().click();
                browser.sleep(2000);
                browser.actions().mouseMove(this.saveMCQ()).perform();
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"), record["BadScoreenglish"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"), record["AverageScoreenglish"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"), record["GoodScoreenglish"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"), record["VeryGoodScoreenglish"]);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Feedback can be entered successfully')
                })
            })
        }
    }
    overallfeedbacktelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.overallFeedbackCheckbox());
                this.overallFeedbackCheckbox().click();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 150, y: 0 }).perform();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 200, y: 0 }).perform();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 250, y: 0 }).perform();
                this.plusbutton().click();
                browser.sleep(2000);
                browser.actions().mouseMove(this.saveMCQ()).perform();
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"), record["BadScoretelugu"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"), record["AverageScoretelugu"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"), record["GoodScoretelugu"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"), record["VeryGoodScoretelugu"]);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Feedback can be entered successfully')
                })
            })
        }
    }
    Publishnavigation() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.waitUntilReady(this.publishBtn());
                this.publishBtn().click();
                browser.sleep(8000);
                this.succesfulCreationOfTasks().click();
                browser.sleep(10000);
                this.createNewTaskBtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Tasks is created successfully')
                })
            })
        }
    }
    ClickonRandomArray() {
        var myArray = ['TrueorFalse1a', 'TrueorFalse1.1a', 'TrueorFalse1.2a', 'TrueorFalse1.3a', 'TrueorFalse1.4a', 'TrueorFalse1.5a', 'TrueorFalse1.6a', 'TrueorFalse2.0a', 'TrueorFalse2.1s', 'TrueorFalse2.s2', 'TrueorFalse2.s3', 'TrueorFalse2.4s', 'TrueorFalse2f.5', 'TrueorFalse2.6g', 'TrueorFalse3.0g', 'TrueorFalse3.1g', 'TrueorFalse3.2g', 'TrueorFalse3.g3', 'TrueorFalse3.4g', 'TrueorFalse3.g5', 'TrueorFalse3.6g', 'TrueorFalse4.1g', 'TrueorFalse4.1g', 'TrueorFalse4.2g', 'TrueorFalse4.3g', 'TrueorFalse4.4g', 'TrueorFalse4.g5', 'TrueorFalse4.g6', 'TrueorFalse5.g0', 'TrueorFalse5.g1', 'TrueorFalse5.g2', 'TrueorFalse5.d3', 'TrueorFalse5.4d', 'TrueorFalse5.d5', 'TrueorFalse5.d6', 'TrueorFalse6.d0', 'TrueorFalse6.d1', 'TrueorFalse6.d2', 'TrueorFalse6.w3', 'TrueorFalse6.4w', 'TrueorFalse6.5w', 'TrueorFalse6.6w', 'TrueorFalse1.0w', 'TrueorFalse1.1e1', 'TrueorFalse1.2e1', 'TrueorFalse1.3e1', 'TrueorFalse1.e41', 'TrueorFalse1.51e', 'TrueorFalse1.61e', 'TrueorFalse2.0e1', 'TrueorFalse2.1e1', 'TrueorFalse2.2e1', 'TrueorFalse2.3e1', 'TrueorFalse2.4e1', 'TrueorFalse2.5e1', 'TrueorFalse2.6e1', 'TrueorFalse3.0e1', 'TrueorFalse3.1e1', 'TrueorFalse3.2e1', 'TrueorFalse3.31r', 'TrueorFalse3.41r', 'TrueorFalse3.5r1', 'TrueorFalse3.r61', 'TrueorFalse4r.11', 'TrueorFalse4.1t2', 'TrueorFalse4.2t1', 'TrueorFalse4.t31', 'TrueorFalse4.t41', 'TrueorFalse4.5t1', 'TrueorFalse4.t61', 'TrueorFalse5.0t1', 'TrueorFalse5.1t1', 'TrueorFalse5.2t1', 'TrueorFalse5.3t1', 'TrueorFalse5.4t1', 'TrueorFalse5.51t', 'TrueorFalse5.6u1', 'TrueorFalse6.u01', 'TrueorFalse6.11u', 'TrueorFalse6.2u1', 'TrueorFalse6.31u', 'TrueorFalse6.u41', 'TrueorFalse6.5u1', 'TrueorFalse6.u61', 'TrueorFalse1.21u2', 'TrueorFalse1.12', 'TrueorFalse1.22', 'TrueorFalse1.32i', 'TrueorFalse1.i42', 'TrueorFalse1.5i2', 'TrueorFalse1.6i2', 'TrueorFalse2.0o2', 'TrueorFalse2.12o', 'TrueorFalse2.22o', 'TrueorFalse2.32o', 'TrueorFalse2.4o2', 'TrueorFalse2.52o', 'TrueorFalse2.6o2', 'TrueorFalse3.l02', 'TrueorFalse3.1l2', 'TrueorFalse3.2l2', 'TrueorFalse3.3l2', 'TrueorFalse3.4l2', 'TrueorFalse3.5l2', 'TrueorFalse3.6x2', 'TrueorFalse4.12x', 'TrueorFalse4.12x3', 'TrueorFalse4.22c', 'TrueorFalse4.32c', 'TrueorFalse4.42c', 'TrueorFalse4.52c', 'TrueorFalse4.6c2', 'TrueorFalse5.0c2', 'TrueorFalse5.c12', 'TrueorFalse5.22b', 'TrueorFalse5.3b2', 'TrueorFalse5.4n2', 'TrueorFalse5.52', 'TrueorFalse5.62', 'TrueorFalse6.02', 'TrueorFalse6.12', 'TrueorFalse6.22', 'TrueorFalse6.32', 'TrueorFalse6.42', 'TrueorFalse6.52', 'TrueorFalse6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;

    }
    taskwithtext() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                BrowserUtils.scrollIntoView(by.xpath("//h2[text()='Question 1']"));
                this.Textradiobtn().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                browser.sleep(1500);
                this.Question1().click();
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                this.Option1().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"), record["Option1"]);
                this.Option2().click();
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"), record["Option2"]);
                browser.sleep(1000);
                this.Radio1().click();
            })
        }

    }
    taskwithtexttelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                BrowserUtils.scrollIntoView(by.xpath("//h2[text()='Question 1']"));
                this.Textradiobtn().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                browser.sleep(2500);
                this.Question1().click();
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                this.Option1().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"), record["Option1"]);
                this.Option2().click();
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"), record["Option2"]);
                browser.sleep(1000);
                this.Radio1().click();
            })
        }

    }
    taskwithtextenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                BrowserUtils.scrollIntoView(by.xpath("//h2[text()='Question 1']"));
                this.Textradiobtn().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(5000);
                this.typefile2().sendKeys(audioPath);
                browser.sleep(1500);
                this.Question1().click();
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                this.Option1().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"), record["Option1"]);
                this.Option2().click();
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"), record["Option2"]);
                browser.sleep(1000);
                this.Radio1().click();
            })
        }
    }
    taskwithpictureandtexttelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.scrollIntoView(by.xpath("//div[text()='Text and Picture']"));
                this.Pictureandtextradiobtn().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile3().sendKeys(audioPath);
                browser.sleep(1500);
                var water = '../../TestData/ImageFiles/water.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile3().sendKeys(waterPath);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"), record["Option1"]);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"), record["Option2"]);
                browser.sleep(1000);
                this.Radio1().click();
            })
        }
    }
    taskwithpictureandtextenglishmultiple() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.Pictureandtextradiobtn().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile3().sendKeys(audioPath);
                browser.sleep(1500);
                var water = '../../TestData/ImageFiles/water.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile4().sendKeys(waterPath);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"), record["Option1"]);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"), record["Option2"]);
                browser.sleep(1000);
                this.Radio1().click();
            })
        }
    }
    taskwithpictureandtextenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.Pictureandtextradiobtn().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile3().sendKeys(audioPath);
                browser.sleep(1500);
                var water = '../../TestData/ImageFiles/water.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile4().sendKeys(waterPath);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[1]"), record["Option1"]);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[2]"), record["Option2"]);
                browser.sleep(1000);
                this.Radio1().click();
            })
        }
    }
    multiplequestionstelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.scrollIntoView(by.xpath("//h2[text()='Question 1']"));
                this.Textradiobtn().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                browser.sleep(2500);
                this.Question1().click();
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                this.Option1().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[1]"), record["Option1"]);
                this.Option2().click();
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[2]"), record["Option2"]);
                browser.sleep(1000);
                this.Radio1().click();
                browser.sleep(1000);
                ///////Question-2///////
                this.Addquestionbtn().click();
                browser.sleep(2000);
                this.Pictureandtextradiobtn2().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                browser.sleep(1500);
                var water = '../../TestData/ImageFiles/Gandhi.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile4().sendKeys(waterPath);
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[2]"), record["Question2"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[3]"), record["Option3"]);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[4]"), record["Option4"]);
                browser.sleep(1000);
                this.Radio3().click();

                ///////Question-3///////
                this.Addquestionbtn().click();
                browser.sleep(2000);
                this.Pictureandtextradiobtn3().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile6().sendKeys(audioPath);
                browser.sleep(2000);
                var water = '../../TestData/ImageFiles/Gandhi.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile6().sendKeys(waterPath);
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[3]"), record["Question3"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[5]"), record["Option5"]);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[6]"), record["Option6"]);
                browser.sleep(1000);
                this.Radio6().click();
            })
        }
    }
    multiplequestionsenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.scrollIntoView(by.xpath("//h2[text()='Question 1']"));
                this.Textradiobtn().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                browser.sleep(2500);
                this.Question1().click();
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                this.Option1().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[1]"), record["Option1"]);
                this.Option2().click();
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[2]"), record["Option2"]);
                browser.sleep(1000);
                this.Radio1().click();
                browser.sleep(1000);
                ///////Question-2///////
                this.Addquestionbtn().click();
                browser.sleep(2000);
                this.Pictureandtextradiobtn2().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                browser.sleep(1500);
                var water = '../../TestData/ImageFiles/Gandhi.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile4().sendKeys(waterPath);
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[2]"), record["Question2"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[3]"), record["Option3"]);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[4]"), record["Option4"]);
                browser.sleep(1000);
                this.Radio3().click();

                ///////Question-3///////
                this.Addquestionbtn().click();
                browser.sleep(2000);
                this.Pictureandtextradiobtn3().click();
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile6().sendKeys(audioPath);
                browser.sleep(2000);
                var water = '../../TestData/ImageFiles/Gandhi.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile6().sendKeys(waterPath);
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[3]"), record["Question3"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[5]"), record["Option5"]);
                BrowserUtils.enterText(by.xpath("(//input[contains(@class,'rv-input-label rv-input')])[6]"), record["Option6"]);
                browser.sleep(1000);
                this.Radio6().click();
            })
        }
    }
    Previewfortrueorfalse() {
        browser.sleep(1000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(1000);
        this.Previewradio().click();
        browser.sleep(1000);
        this.Checkbtn().click();
        browser.sleep(2000);
        this.ShowSolutionbtn().click();
        browser.sleep(2000);
        this.Previewpagecomments();
        browser.sleep(1000);
        this.clickOntappingMCQNextBtn().click();
    }
    createTrueorfalsetaskwithtexttelugu() {
        this.createpageTrueorfalsetasktelugu();
        browser.sleep(1000);
        this.taskwithtexttelugu();
        this.taskwithpictureandtextenglish();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully')
        })
    }
    createTrueorfalsetasktelugumultiplequestions() {
        this.createpageTrueorfalsetasktelugu();
        browser.sleep(1000);
        this.multiplequestionstelugu();
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskis created successfully')
        })
    }
    createTrueorfalsetaskenglishmultiplequestions() {
        this.createpageTrueorfalsetaskenglish();
        browser.sleep(1000);
        this.multiplequestionsenglish();
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetask is created successfully')
        })
    }
    createTrueorfalsetaskwithtextenglish() {
        this.createpageTrueorfalsetaskenglish();
        browser.sleep(1000);
        this.taskwithpictureandtextenglish();
        BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(1500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully')
        })
    }
    createTrueorfalsetaskwithtextevs() {
        this.createpageTrueorfalsetaskevs();
        browser.sleep(1000);
        this.taskwithpictureandtextenglish();
        BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(1500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully')
        })
    }
    createTrueorfalsetaskwithtextmaths() {
        this.createpageTrueorfalsetaskmaths();
        browser.sleep(1000);
        this.taskwithpictureandtextenglish();
        BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(1500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully')
        })
    }
    createTrueorfalsetaskwithtextandpicturetelugu() {
        this.createpageTrueorfalsetasktelugu();
        browser.sleep(1000);
        this.taskwithtexttelugu();
        BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(1500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully')
        })
    }
    createTrueorfalsetaskwithtextandpictureenglish() {
        this.createpageTrueorfalsetaskenglish();
        browser.sleep(1000);
        this.taskwithpictureandtextenglish();
        browser.sleep(3500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully')
        })
    }
    createTrueorfalsetaskwithtextandpictureevs() {
        this.createpageTrueorfalsetaskevs();
        browser.sleep(1000);
        this.taskwithpictureandtextenglish();
        browser.sleep(3500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully')
        })
    }
    createTrueorfalsetaskwithtextandpicturemaths() {
        this.createpageTrueorfalsetaskmaths();
        browser.sleep(1000);
        this.taskwithpictureandtextenglish();
        browser.sleep(3500);
        this.saveMCQ().click();
        browser.sleep(1500);
        this.okbutton().click();
        browser.sleep(2500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully')
        })
    }
    Previewcancelicon() {
        this.createpageTrueorfalsetaskenglish();
        this.taskwithpictureandtextenglish();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(3500);
        this.okbutton().click();
        browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(1500);
        this.TrueOrFalsebreadcrumb().click();
        browser.sleep(1500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview cancelicon is working successfully')
        })
    }
    Previewbackbutton() {
        this.createpageTrueorfalsetaskenglish();
        this.taskwithpictureandtextenglish();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(3500);
        this.saveMCQ().click();
        browser.sleep(12500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(2500);
        this.Backbtn().click();
        browser.sleep(1500);
        this.Taskcancelbtn().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview back button is working successfully')
        })
    }
    Previewbreadcrumbs() {
        this.createpageTrueorfalsetaskenglish();
        this.taskwithpictureandtextenglish();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(3500);
        this.saveMCQ().click();
        browser.sleep(12500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(3500);
        BrowserUtils.scrollIntoView(by.xpath("//a[text()=' Task-list']"));
        browser.sleep(1500);
        this.Previewbreadcrumb().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview page breadcrumbs is working successfully')
        })
    }
    Publishbackbutton() {
        this.createpageTrueorfalsetaskenglish();
        this.taskwithpictureandtextenglish();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(3500);
        this.saveMCQ().click();
        browser.sleep(12500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(3500);
        this.clickOntappingMCQNextBtn().click();
        BrowserUtils.waitUntilReady(this.publishBtn());
        browser.sleep(500);
        this.Backbtn().click();
        browser.sleep(3500);
        this.Backbtn().click();
        browser.sleep(3500);
        this.Taskcancelbtn().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish backbutton is working successfully')
        })
    }
    Publishbreadcrmbs() {
        this.createpageTrueorfalsetaskenglish();
        this.taskwithpictureandtextenglish();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(3500);
        this.saveMCQ().click();
        browser.sleep(12500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(3500);
        this.clickOntappingMCQNextBtn().click();
        BrowserUtils.waitUntilReady(this.publishBtn());
        browser.sleep(500);
        this.Previewbreadcrumb().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish backbutton is working successfully')
        })
    }
    SearchTaskfromlist() {
        browser.ignoreSynchronization = true
        var clearsearch = element(by.xpath("//input[@class='rv-input']"));
        clearsearch.sendKeys("trueorflase");
        BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        browser.sleep(500);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task list search is working')
        })
    }
    CancelTask() {
        this.createpageTrueorfalsetasktelugu();
        browser.sleep(1000);
        this.multiplequestionstelugu();
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(10500);
        this.okbutton().click();
        browser.sleep(2500);
        this.Taskcancelbtn().click();
        browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully')
        })
    }
    Updatetrueorfalsetask() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                browser.sleep(1000);
                var Subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                BrowserUtils.clickOnElement(Subjectselection);
                browser.sleep(2000);
                var linkselection = by.xpath("(//td[contains(text(),'Draft')]/..//td/span//a[contains(text(),'TrueorFalse')])[1]");
                BrowserUtils.clickOnElement(linkselection);
                browser.sleep(6000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
                browser.sleep(1000);
                this.saveMCQ().click();
                browser.sleep(1000);
                this.okbutton().click();
                browser.sleep(1500);
                this.Publishnavigation();
            })
        }
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'true or false Task is updated successfully')
        })

    }
    Cancelicon() {
        this.createpageTrueorfalsetaskenglish();
        browser.sleep(2000);
        this.TaskCancelicon().click();
        browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully using cancel icon')
        })
    }
    Contenttypesearch() {
        browser.ignoreSynchronization = true
        var contentsearch = element(by.xpath("//input[@type='search']"));
        this.createNewTaskBtn().click();
        browser.sleep(1000);
        contentsearch.sendKeys("True or False");
        contentsearch.clear();
        browser.sleep(500);
        this.Class1().click();
    }
}
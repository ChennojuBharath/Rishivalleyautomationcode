import { browser, by, element, Key, WebElement, $ } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
import { coursePage } from '../Pages/coursePage.po';
var path = require("path");
let coursePg: coursePage
coursePg = new coursePage();
export class matchtheFollowingPage {

    createNewTaskBtn() {
        return element(by.xpath("//span[contains(text(),'Create New Task')]"));
    }
    MatchtheFollLink() {
        return element(by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Match the following']"));
    }
    selectSubject() {
        return element(by.xpath('//select[@name="subjectNames"]'));
    }
    addSlide() {
        return element(by.xpath("//div[@class='add-slide ng-star-inserted']"));//h3[@class='default-cursor']
    }
    clickOntappingMCQNextBtn() {
        return element(by.xpath("//span[text()='Next ']"))
    }
    MatchTheFollowingbreadcrumb() {
        return element(by.xpath("//a[@class='nav-link ng-star-inserted'][text()='  Match The Following']"))
    }
    Previewbreadcrumb() {
        return element(by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Preview']"))
    }
    commentbutton() {
        return element(by.xpath("(//span[contains(text(),'Add Comment')])[1]"))
    }
    Commentsavebtn() {
        return element(by.xpath("//span[contains(text(),'SAVE')]"));
    }
    plusbutton() {
        return element(by.xpath("//button[text()='+']"));
    }
    overallFeedbackCheckbox() {
        return element(by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
    }
    Norecored() {
        return element(by.xpath("//td[text()=' No record found. ']"));
    }
    Activityid() {
        return element(by.xpath("//input[@id='activityid']"));
    }
    sliderTextBox() {
        return element(by.xpath("//input[@ng-reflect-name='feedbackInfo']"));
    }
    slider() {
        return element(by.xpath("//div[@class='mat-slider-thumb']"));
    }
    Instructions() {
        return element(by.xpath("//textarea[@ng-reflect-name]"));
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
    publishBtn() {
        return element(by.xpath("//span[contains(text(),'Send To Review')]"))
    }

    succesfulCreationOfTasks() {
        return element(by.xpath("//span[text()='Home']"))
    }
    okbutton() {
        return element(by.xpath("//button[text()='OK']"))
    }
    Audiobutton() {
        return element(by.xpath("//div[.='Upload Audio File']"));
    }
    Addbtn() {
        return element(by.xpath("//span[text()=' ADD + ']"));
    }
    Textradio1() {
        return element(by.xpath("(//mat-radio-button[@ng-reflect-value='text']//div[@class='mat-radio-outer-circle'])[1]"));
    }
    Textradio2() {
        return element(by.xpath("(//mat-radio-button[@ng-reflect-value='text']//div[@class='mat-radio-outer-circle'])[1]"));
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
    typefile7() {
        return element(by.xpath("(//input[@type='file'])[7]"))
    }
    typefile8() {
        return element(by.xpath("(//input[@type='file'])[8]"))
    }
    typefile9() {
        return element(by.xpath("(//input[@type='file'])[9]"))
    }
    typefile10() {
        return element(by.xpath("(//input[@type='file'])[10]"))
    }
    typefile11() {
        return element(by.xpath("(//input[@type='file'])[11]"))
    }
    typefile12() {
        return element(by.xpath("(//input[@type='file'])[12]"))
    }
    optiondropdown1() {
        return element(by.xpath("(//select[contains(@class,'ng-pristine ng-valid ')])[1]"))
    }
    optiondropdown2() {
        return element(by.xpath("(//select[contains(@class,'ng-pristine ng-valid ')])[2]"))
    }
    optiondropdown3() {
        return element(by.xpath("(//select[contains(@class,'ng-pristine ng-valid ')])[3]"))
    }
    optiondropdown4() {
        return element(by.xpath("(//select[contains(@class,'ng-pristine ng-valid ')])[4]"))
    }
    //Text to text
    optionvalue1() {
        return element(by.xpath("(//option[text()=' 4'])[1]"))
    }
    optionvalue2() {
        return element(by.xpath("(//option[text()=' 2'])[2]"))
    }
    optionvalue3() {
        return element(by.xpath("(//option[text()=' 3'])[4]"))
    }
    optionvalue4() {
        return element(by.xpath("(//option[text()=' 4'])[2]"))
    }
    //Image to text
    optionValue5() {
        return element(by.xpath("(//option[text()=' 2'])[5]"))
    }
    optionValue1() {
        return element(by.xpath("(//option[text()=' 1'])[1]"))
    }
    optionValue2() {
        return element(by.xpath("(//option[text()=' 2'])[2]"))
    }
    optionValue3() {
        return element(by.xpath("(//option[text()=' 3'])[3]"))
    }
    optionValue4() {
        return element(by.xpath("(//option[text()=' 4'])[4]"))
    }
    checkbox5() {
        return element(by.xpath("(//div[@class='mat-checkbox-inner-container'])[5]"))
    }
    Deletebtn() {
        return element(by.xpath("//span[text()='DELETE']"))
    }
    saveMCQ() {
        return element(by.xpath("//span[contains(text(),'Save')]"))
    }
    acceptSaveTaskPopUp() {
        return element(by.xpath("//button[text()='OK']"))
    }
    Textbox5() {
        return element(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"))
    }
    Textradiobutton() {
        return element(by.xpath("(//div[text()=' Text '])[1]"))
    }
    Textradiobutton2() {
        return element(by.xpath("(//div[text()=' Text '])[2]"))
    }
    Previewheader() {
        return element(by.xpath("//div[text()=' PREVIEW ']"))
    }
    Checkbtn() {
        return element(by.xpath("//button[text()='Check']"))
    }
    ShowSolutionbtn() {
        return element(by.xpath("//button[text()='Show Solution']"))
    }
    Imagesource1() {
        return element(by.xpath("(//div[@class='ng-star-inserted'])[1]"))
    }
    Imagesource2() {
        return element(by.xpath("(//div[@class='ng-star-inserted'])[2]"))
    }
    Imagesource3() {
        return element(by.xpath("(//div[@class='ng-star-inserted'])[3]"))
    }
    Imagesource4() {
        return element(by.xpath("(//div[@class='ng-star-inserted'])[4]"))
    }
    Imagesource5() {
        return element(by.xpath("(//div[@class='ng-star-inserted'])[5]"))
    }
    Imagesource6() {
        return element(by.xpath("(//div[@class='ng-star-inserted'])[6]"))
    }
    Imagesource7() {
        return element(by.xpath("(//div[@class='ng-star-inserted'])[7]"))
    }
    Imagesource8() {
        return element(by.xpath("(//div[@class='ng-star-inserted'])[8]"))
    }
    Backbtn() {
        return element(by.xpath("//span[contains(text(),'Back')]"))
    }
    Cancelbtn() {
        return element(by.xpath("//div[text()='Cancel']"))
    }
    Cancelicon() {
        return element(by.xpath("//span[text()='×']"))
    }
    Class1() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[contains(text(),'Class 2')]"));
    }
    Taskcancelbtn() {
        return element(by.xpath("//span[text()='Cancel']"));
    }
    ActivityId() {
        this.Activityid().sendKeys(coursePg.ClickonRandomArray());
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
    createMatchthefollowingImagetoImageTasktelugu() {
        this.matchingcreatepagetelugu();
        this.MatchImagetoImage();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(3000);
        this.saveMCQ().click();
        browser.sleep(10000);
        this.okbutton().click();
        browser.sleep(4000);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingImagetoImageTask is created successfully')
        })
    }
    createMatchthefollowingImagetoImageTaskenglish() {
        this.matchingcreatepageenglish();
        this.MatchImagetoImage();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(1000);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingImagetoImageTask is created successfully')
        })
    }
    createMatchthefollowingImagetoImageTaskevs() {
        this.matchingcreatepageevs();
        this.MatchImagetoImage();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(1000);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingImagetoImageTask is created successfully')
        })
    }
    createMatchthefollowingImagetoImageTaskmaths() {
        this.matchingcreatepagemaths();
        this.MatchImagetoImage();
        browser.sleep(5000);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(1000);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingImagetoImageTask is created successfully')
        })
    }
    createMatchthefollowingTexttoImageTasktelugu() {
        this.matchingcreatepagetelugu();
        this.MatchTexttoImagetelugu();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(10000);
        this.okbutton().click();
        browser.sleep(2500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingTexttoImageTask is created successfully')
        })
    }
    createMatchthefollowingTexttoImageTaskenglish() {
        this.matchingcreatepageenglish();
        this.MatchTexttoImage();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(5000);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingTexttoImageTask is created successfully')
        })
    }
    createMatchthefollowingTexttoImageTaskevs() {
        this.matchingcreatepageevs();
        this.MatchTexttoImage();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(5000);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingTexttoImageTask is created successfully')
        })
    }
    createMatchthefollowingTexttoImageTaskmaths() {
        this.matchingcreatepagemaths();
        this.MatchTexttoImage();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(5000);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingTexttoImageTask is created successfully')
        })
    }
    Contenttypesearch() {
        var contentsearch = element(by.xpath("//input[@placeholder='All content types']"));
        this.createNewTaskBtn().click();
        browser.sleep(1000);
        contentsearch.sendKeys("Match the foll");
        contentsearch.clear();
        browser.sleep(500);
        this.Class1().click();
    }
    Createcancelbutton() {
        this.matchingcreatepageenglish();
        BrowserUtils.scrollIntoView(by.xpath("//div[text()='Cancel']"));
        this.Cancelbtn().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Create cancel button is working successfully')
        })
    }
    Createcancelicon() {
        this.matchingcreatepageenglish();
        BrowserUtils.scrollIntoView(by.xpath("//span[text()='×']"));
        this.Cancelicon().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Create cancelicon is working successfully')
        })
    }
    CancelTask() {
        this.matchingcreatepagetelugu();
        this.MatchImagetoTexttelugu();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(10500);
        this.okbutton().click();
        browser.sleep(1500);
        this.Taskcancelbtn().click();
        browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully')
        })
    }
    Updatematchthefoll() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                browser.sleep(1000);
                var Subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                BrowserUtils.clickOnElement(Subjectselection);
                browser.sleep(2000);
                var linkselection = by.xpath("(//td[contains(text(),'Draft')]/..//td/span//a[contains(text(),'MatchtheFollowing')])[1]");
                BrowserUtils.clickOnElement(linkselection);
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
                this.clickOntappingMCQNextBtn().click();
                browser.sleep(12000);
                this.okbutton().click();
                browser.sleep(3500);
                this.Previewpagecomments();
                browser.sleep(5000);
                this.clickOntappingMCQNextBtn().click();
                browser.sleep(5000);
                this.publishBtn().click();
                browser.sleep(10000);
                this.succesfulCreationOfTasks().click();
                browser.sleep(4000);
                this.createNewTaskBtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Tasks is created successfully')
                })
                this.createNewTaskBtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'matchingTask is updated successfully')
                })
            })
        }
    }
    SearchTaskfromlist() {
        var clearsearch = element(by.xpath("//input[@class='rv-input']"));
        clearsearch.sendKeys("Match");
        BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        browser.sleep(500);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task list search is working')
        })
    }
    Previewbackbutton() {
        this.matchingcreatepagetelugu();
        this.MatchTexttoTexttelugu();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(1500);
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
        this.matchingcreatepagetelugu();
        this.MatchTexttoTexttelugu();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(1500);
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
        this.matchingcreatepagetelugu();
        this.MatchTexttoTexttelugu();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(1500);
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
        this.matchingcreatepagetelugu();
        this.MatchTexttoTexttelugu();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(1500);
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
    Deleteoptions() {
        this.matchingcreatepageenglish();
        this.MatchImagetoTextenglish();
        this.Addbtn().click();
        browser.sleep(500);
        var tiger = "D:/RishiValleyAutomation/POM-LMS without excel/LMSProtractorScripts/TestData/ImageFiles/tiger.png";
        this.typefile2().sendKeys(tiger);
        this.Textbox5().click();
        this.Textbox5().sendKeys("tiger");
        this.optionValue5().click();
        browser.sleep(500);
        this.checkbox5().click();
        BrowserUtils.scrollIntoView(by.xpath("//span[text()='DELETE']"));
        this.Deletebtn().click();
        this.acceptSaveTaskPopUp().click();
        browser.sleep(500);
        this.optionvalue1().click();
        browser.sleep(500);
        this.optionvalue2().click();
        browser.sleep(500);
        this.optionvalue3().click();
        browser.sleep(500);
        this.optionvalue4().click();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        this.okbutton().click();
        browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Options are added for task successfully')
        })
    }
    Addoptions() {
        this.matchingcreatepageenglish();
        this.MatchImagetoTextenglish();
        this.Addbtn().click();
        browser.sleep(500);
        var tiger = "D:/RishiValleyAutomation/POM-LMS without excel/LMSProtractorScripts/TestData/ImageFiles/tiger.png";
        this.typefile2().sendKeys(tiger);
        this.Textbox5().click();
        this.Textbox5().sendKeys("tiger");
        this.optionValue5().click();
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(2500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Options are added for task successfully')
        })
    }
    createMatchthefollowingImagetoTextTasktelugu() {
        this.matchingcreatepagetelugu();
        this.MatchImagetoTexttelugu();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(10500);
        this.okbutton().click();
        browser.sleep(1500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingImagetoTextTask is created successfully')
        })
    }
    createMatchthefollowingImagetoTextTaskenglish() {
        this.matchingcreatepageenglish();
        this.MatchImagetoTextenglish();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(1500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingImagetoTextTask is created successfully')
        })
    }
    createMatchthefollowingTexttoTextTasktelugu() {
        this.matchingcreatepagetelugu();
        this.MatchTexttoTexttelugu();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(2500);
        this.okbutton().click();
        browser.sleep(10500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingTexttoTextTask is created successfully')
        })
    }
    createMatchthefollowingTexttoTextTaskenglish() {
        this.matchingcreatepageenglish();
        this.MatchTexttoText();
        browser.sleep(5000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingTexttoTextTask is created successfully')
        })
    }
    MatchImagetoTexttelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(500);
                var teacup = "../../TestData/ImageFiles/teacup.jpeg";
                var teacupPath = path.resolve(__dirname, teacup);
                this.typefile2().sendKeys(teacupPath);
                browser.sleep(2500);
                var bucket = "../../TestData/ImageFiles/bucket.jpeg";
                var bucketPath = path.resolve(__dirname, bucket);
                this.typefile3().sendKeys(bucketPath);
                browser.sleep(2500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile4().sendKeys(stepsPath);
                browser.sleep(2000);
                var monitor = "../../TestData/ImageFiles/monitor.jpeg";
                var monitorPath = path.resolve(__dirname, monitor);
                this.typefile5().sendKeys(monitorPath);
                browser.sleep(2000);
                this.Textradiobutton2().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["textbox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["textbox1"]);
                browser.sleep(500);
                this.optionValue1().click();
                browser.sleep(500);
                this.optionValue2().click();
                browser.sleep(500);
                this.optionValue3().click();
                browser.sleep(500);
                this.optionValue4().click();
                browser.sleep(500);
            })
        }
    }
    MatchImagetoTextenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(500);
                var teacup = "../../TestData/ImageFiles/teacup.jpeg";
                var teacupPath = path.resolve(__dirname, teacup);
                this.typefile2().sendKeys(teacupPath);
                browser.sleep(500);
                var bucket = "../../TestData/ImageFiles/bucket.jpeg";
                var bucketPath = path.resolve(__dirname, bucket);
                this.typefile2().sendKeys(bucketPath);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                var monitor = "../../TestData/ImageFiles/monitor.jpeg";
                var monitorPath = path.resolve(__dirname, monitor);
                this.typefile2().sendKeys(monitorPath);
                browser.sleep(1000);
                this.Textradiobutton2().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["textbox1"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["textbox4"]);
                browser.sleep(500);
                this.optionvalue1().click();
                browser.sleep(500);
                this.optionvalue2().click();
                browser.sleep(500);
                this.optionvalue3().click();
                browser.sleep(500);
                this.optionvalue4().click();
                browser.sleep(500);
            })
        }
    }
    ClickonRandomArray() {
        var myArray = ['MatchtheFollowing1a', 'MatchtheFollowing1.1a', 'MatchtheFollowing1.2a', 'MatchtheFollowing1.3a', 'MatchtheFollowing1.4a', 'MatchtheFollowing1.5a', 'MatchtheFollowing1.6a', 'MatchtheFollowing2.0a', 'MatchtheFollowing2.1s', 'MatchtheFollowing2.s2', 'MatchtheFollowing2.s3', 'MatchtheFollowing2.4s', 'MatchtheFollowing2f.5', 'MatchtheFollowing2.6g', 'MatchtheFollowing3.0g', 'MatchtheFollowing3.1g', 'MatchtheFollowing3.2g', 'MatchtheFollowing3.g3', 'MatchtheFollowing3.4g', 'MatchtheFollowing3.g5', 'MatchtheFollowing3.6g', 'MatchtheFollowing4.1g', 'MatchtheFollowing4.1g', 'MatchtheFollowing4.2g', 'MatchtheFollowing4.3g', 'MatchtheFollowing4.4g', 'MatchtheFollowing4.g5', 'MatchtheFollowing4.g6', 'MatchtheFollowing5.g0', 'MatchtheFollowing5.g1', 'MatchtheFollowing5.g2', 'MatchtheFollowing5.d3', 'MatchtheFollowing5.4d', 'MatchtheFollowing5.d5', 'MatchtheFollowing5.d6', 'MatchtheFollowing6.d0', 'MatchtheFollowing6.d1', 'MatchtheFollowing6.d2', 'MatchtheFollowing6.w3', 'MatchtheFollowing6.4w', 'MatchtheFollowing6.5w', 'MatchtheFollowing6.6w', 'MatchtheFollowing1.0w', 'MatchtheFollowing1.1e1', 'MatchtheFollowing1.2e1', 'MatchtheFollowing1.3e1', 'MatchtheFollowing1.e41', 'MatchtheFollowing1.51e', 'MatchtheFollowing1.61e', 'MatchtheFollowing2.0e1', 'MatchtheFollowing2.1e1', 'MatchtheFollowing2.2e1', 'MatchtheFollowing2.3e1', 'MatchtheFollowing2.4e1', 'MatchtheFollowing2.5e1', 'MatchtheFollowing2.6e1', 'MatchtheFollowing3.0e1', 'MatchtheFollowing3.1e1', 'MatchtheFollowing3.2e1', 'MatchtheFollowing3.31r', 'MatchtheFollowing3.41r', 'MatchtheFollowing3.5r1', 'MatchtheFollowing3.r61', 'MatchtheFollowing4r.11', 'MatchtheFollowing4.1t2', 'MatchtheFollowing4.2t1', 'MatchtheFollowing4.t31', 'MatchtheFollowing4.t41', 'MatchtheFollowing4.5t1', 'MatchtheFollowing4.t61', 'MatchtheFollowing5.0t1', 'MatchtheFollowing5.1t1', 'MatchtheFollowing5.2t1', 'MatchtheFollowing5.3t1', 'MatchtheFollowing5.4t1', 'MatchtheFollowing5.51t', 'MatchtheFollowing5.6u1', 'MatchtheFollowing6.u01', 'MatchtheFollowing6.11u', 'MatchtheFollowing6.2u1', 'MatchtheFollowing6.31u', 'MatchtheFollowing6.u41', 'MatchtheFollowing6.5u1', 'MatchtheFollowing6.u61', 'MatchtheFollowing1.21u2', 'MatchtheFollowing1.12', 'MatchtheFollowing1.22', 'MatchtheFollowing1.32i', 'MatchtheFollowing1.i42', 'MatchtheFollowing1.5i2', 'MatchtheFollowing1.6i2', 'MatchtheFollowing2.0o2', 'MatchtheFollowing2.12o', 'MatchtheFollowing2.22o', 'MatchtheFollowing2.32o', 'MatchtheFollowing2.4o2', 'MatchtheFollowing2.52o', 'MatchtheFollowing2.6o2', 'MatchtheFollowing3.l02', 'MatchtheFollowing3.1l2', 'MatchtheFollowing3.2l2', 'MatchtheFollowing3.3l2', 'MatchtheFollowing3.4l2', 'MatchtheFollowing3.5l2', 'MatchtheFollowing3.6x2', 'MatchtheFollowing4.12x', 'MatchtheFollowing4.12x3', 'MatchtheFollowing4.22c', 'MatchtheFollowing4.32c', 'MatchtheFollowing4.42c', 'MatchtheFollowing4.52c', 'MatchtheFollowing4.6c2', 'MatchtheFollowing5.0c2', 'MatchtheFollowing5.c12', 'MatchtheFollowing5.22b', 'MatchtheFollowing5.3b2', 'MatchtheFollowing5.4n2', 'MatchtheFollowing5.52', 'MatchtheFollowing5.62', 'MatchtheFollowing6.02', 'MatchtheFollowing6.12', 'MatchtheFollowing6.22', 'MatchtheFollowing6.32', 'MatchtheFollowing6.42', 'MatchtheFollowing6.52', 'MatchtheFollowing6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;

    }
    matchingcreatepageenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(3000);
                this.MatchtheFollLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EnglishTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["matchingEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["matchingEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@minutesseconds]"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Matching.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.overallfeedbackenglish();
                this.Createpagecomments();
            })
        }
    }
    matchingcreatepagemaths() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(3000);
                this.MatchtheFollLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["MathsTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["matchingEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["matchingEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@minutesseconds]"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Matching.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.overallfeedbackenglish();
                this.Createpagecomments();
            })
        }
    }
    matchingcreatepageevs() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(3000);
                this.MatchtheFollLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EvsTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["matchingEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["matchingEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@minutesseconds]"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Matching.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.overallfeedbackenglish();
                this.Createpagecomments();
            })
        }
    }
    matchingcreatepagetelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(3000);
                this.MatchtheFollLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["TaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//select[@class='rv-select w-100 ng-untouched ng-pristine ng-valid'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["matchingTeluguTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["matchingTeluguInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Matching.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(1000);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.overallfeedbacktelugu();
                this.Createpagecomments();
            })
        }
    }
    MatchTexttoText() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("(//div[text()=' Text '])[1]"));
                this.Textradiobutton().click();
                browser.sleep(1000);
                this.Textradiobutton2().click();
                browser.sleep(1000);
                this.Addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["Textbox1"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["Textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["Textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["Textbox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"), record["Textbox5"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[6]"), record["Textbox6"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[7]"), record["Textbox7"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[8]"), record["Textbox8"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[9]"), record["Textbox9"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[10]"), record["Textbox10"]);
            })
        }
        browser.sleep(500);
        this.optionValue5().click();
        browser.sleep(500);
        this.optionvalue1().click();
        browser.sleep(500);
        this.optionvalue2().click();
        browser.sleep(500);
        this.optionvalue3().click();
        browser.sleep(500);
        this.optionvalue4().click();
        browser.sleep(500);
    }
    MatchTexttoTextenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("(//div[text()=' Text '])[1]"));
                this.Textradiobutton().click();
                browser.sleep(1000);
                this.Textradiobutton2().click();
                browser.sleep(1000);
                this.Addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["Textbox1"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["Textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["Textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["Textbox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"), record["Textbox5"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[6]"), record["Textbox6"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[7]"), record["Textbox7"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[8]"), record["Textbox8"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[9]"), record["Textbox9"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[10]"), record["Textbox10"]);
            })
        }
        browser.sleep(500);
        this.optionValue5().click();
        browser.sleep(500);
        this.optionvalue1().click();
        browser.sleep(500);
        this.optionvalue2().click();
        browser.sleep(500);
        this.optionvalue3().click();
        browser.sleep(500);
        this.optionvalue4().click();
        browser.sleep(500);
    }

    MatchTexttoTexttelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("(//div[text()=' Text '])[1]"));
                this.Textradiobutton().click();
                browser.sleep(1000);
                this.Textradiobutton2().click();
                browser.sleep(1000);
                this.Addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["Textbox1"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["Textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["Textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["Textbox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"), record["Textbox5"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[6]"), record["Textbox6"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[7]"), record["Textbox7"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[8]"), record["Textbox8"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[9]"), record["Textbox9"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[10]"), record["Textbox10"]);
            })
        }
        browser.sleep(500);
        this.optionValue5().click();
        browser.sleep(500);
        this.optionvalue4().click();
        browser.sleep(500);
        this.optionvalue3().click();
        browser.sleep(500);
        this.optionvalue1().click();
        browser.sleep(500);
        this.optionvalue2().click();
        browser.sleep(500);
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
    MatchTexttoImage() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1500);
                this.Addbtn().click();
                browser.sleep(1500);
                this.Textradiobutton().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["Textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["Textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["Textbox5"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["textBox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"), record["textBox1"]);
                this.optionValue5().click();
                var Donkey = '../../TestData/ImageFiles/Donkey.png';
                var DonkeyPath = path.resolve(__dirname, Donkey);
                this.typefile2().sendKeys(DonkeyPath);
                browser.sleep(500);
                this.optionValue1().click();
                var pot = "../../TestData/ImageFiles/pot.png";
                var potPath = path.resolve(__dirname, pot);
                this.typefile2().sendKeys(potPath);
                browser.sleep(500);
                this.optionValue2().click();
                var fish = "../../TestData/ImageFiles/fish.png";
                var fishPath = path.resolve(__dirname, fish);
                this.typefile2().sendKeys(fishPath);
                browser.sleep(500);
                this.optionValue3().click();
                var watermelon = "../../TestData/ImageFiles/watermelon.png";
                var watermelonPath = path.resolve(__dirname, watermelon);
                this.typefile2().sendKeys(watermelonPath);
                browser.sleep(2000);
                this.optionValue4().click();
                var solder = "../../TestData/ImageFiles/solder.png";
                var solderPath = path.resolve(__dirname, solder);
                this.typefile2().sendKeys(solderPath);
                browser.sleep(2000);
            })
        }
    }
    MatchTexttoImageenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1500);
                this.Addbtn().click();
                browser.sleep(1500);
                this.Textradiobutton().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["Textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["Textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["Textbox5"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["textBox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"), record["textBox1"]);
                this.optionValue5().click();
                var Donkey = '../../TestData/ImageFiles/Donkey.png';
                var DonkeyPath = path.resolve(__dirname, Donkey);
                this.typefile2().sendKeys(DonkeyPath);
                browser.sleep(2500);
                this.optionValue1().click();
                var pot = "../../TestData/ImageFiles/pot.png";
                var potPath = path.resolve(__dirname, pot);
                this.typefile3().sendKeys(potPath);
                browser.sleep(2500);
                this.optionValue2().click();
                var fish = "../../TestData/ImageFiles/fish.png";
                var fishPath = path.resolve(__dirname, fish);
                this.typefile4().sendKeys(fishPath);
                browser.sleep(2500);
                this.optionValue3().click();
                var watermelon = "../../TestData/ImageFiles/watermelon.png";
                var watermelonPath = path.resolve(__dirname, watermelon);
                this.typefile5().sendKeys(watermelonPath);
                browser.sleep(2000);
                this.optionValue4().click();
                var solder = "../../TestData/ImageFiles/solder.png";
                var solderPath = path.resolve(__dirname, solder);
                this.typefile2().sendKeys(solderPath);
                browser.sleep(2000);
            })
        }
    }
    MatchTexttoImagetelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1500);
                this.Addbtn().click();
                browser.sleep(1500);
                this.Textradiobutton().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["textBox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["textBox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["textBox5"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["textBox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"), record["textBox1"]);
                this.optionValue5().click();
                var Donkey = '../../TestData/ImageFiles/Donkey.png';
                var DonkeyPath = path.resolve(__dirname, Donkey);
                this.typefile2().sendKeys(DonkeyPath);
                browser.sleep(2000);
                this.optionValue1().click();
                var pot = "../../TestData/ImageFiles/pot.png";
                var potPath = path.resolve(__dirname, pot);
                this.typefile3().sendKeys(potPath);
                browser.sleep(2000);
                this.optionValue2().click();
                var fish = "../../TestData/ImageFiles/fish.png";
                var fishPath = path.resolve(__dirname, fish);
                this.typefile4().sendKeys(fishPath);
                browser.sleep(2000);
                this.optionValue3().click();
                var watermelon = "../../TestData/ImageFiles/watermelon.png";
                var watermelonPath = path.resolve(__dirname, watermelon);
                this.typefile5().sendKeys(watermelonPath);
                browser.sleep(2000);
                this.optionValue4().click();
                var solder = "../../TestData/ImageFiles/solder.png";
                var solderPath = path.resolve(__dirname, solder);
                this.typefile6().sendKeys(solderPath);
                browser.sleep(2000);
            })
        }
    }
    MatchImagetoImage() {
        BrowserUtils.scrollIntoView(by.xpath("//span[text()=' ADD + ']"));
        browser.sleep(500);
        var finger1 = "../../TestData/ImageFiles/finger1.png";
        var finger1Path = path.resolve(__dirname, finger1);
        this.typefile2().sendKeys(finger1Path);
        browser.sleep(2000);
        var finger2 = "../../TestData/ImageFiles/finger2.png";
        var finger2Path = path.resolve(__dirname, finger2);
        this.typefile3().sendKeys(finger2Path);
        browser.sleep(2000);
        var finger3 = "../../TestData/ImageFiles/finger3.png";
        var finger3Path = path.resolve(__dirname, finger3);
        this.typefile4().sendKeys(finger3Path);
        browser.sleep(2000);
        var finger4 = "../../TestData/ImageFiles/finger4.png";
        var finger4Path = path.resolve(__dirname, finger4);
        this.typefile5().sendKeys(finger4Path);
        browser.sleep(2000);
        this.Addbtn().click();
        browser.sleep(1500);
        var finger5 = "../../TestData/ImageFiles/finger5.png";
        var finger5Path = path.resolve(__dirname, finger5);
        this.typefile6().sendKeys(finger5Path);
        browser.sleep(2000);
        var Dies5 = "../../TestData/ImageFiles/Dies5.png";
        var Dies5Path = path.resolve(__dirname, Dies5);
        this.typefile7().sendKeys(Dies5Path);
        browser.sleep(2000);
        this.optionValue5().click();
        var Dies4 = "../../TestData/ImageFiles/Dies4.png";
        var Dies4Path = path.resolve(__dirname, Dies4);
        this.typefile8().sendKeys(Dies4Path);
        browser.sleep(2000);
        this.optionValue1().click();
        var Dies1 = "../../TestData/ImageFiles/Dies1.png";
        var Dies1Path = path.resolve(__dirname, Dies1);
        this.typefile9().sendKeys(Dies1Path);
        browser.sleep(2000);
        this.optionValue2().click();
        var Dies3 = "../../TestData/ImageFiles/Dies3.png";
        var Dies3Path = path.resolve(__dirname, Dies3);
        this.typefile10().sendKeys(Dies3Path);
        browser.sleep(2000);
        this.optionValue3().click();
        browser.sleep(2000);
        var Dies2 = "../../TestData/ImageFiles/Dies2.png";
        var Dies2Path = path.resolve(__dirname, Dies2);
        this.typefile11().sendKeys(Dies2Path);
        browser.sleep(2000);
        this.optionValue4().click();
        browser.sleep(2000);
    }



    Publishnavigation() {
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(10000);
        this.Previewpagecomments();
        browser.sleep(5000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(5000);
        this.publishBtn().click();
        browser.sleep(10000);
        this.succesfulCreationOfTasks().click();
        browser.sleep(4000);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Tasks is created successfully')
        })
    }
}



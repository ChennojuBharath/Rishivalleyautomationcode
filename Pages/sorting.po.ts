import { browser, by, element, Key, WebElement } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
import { Driver } from 'selenium-webdriver/chrome';
var path = require('path');

export class sortingPage {
    createNewTaskBtn() {
        return element(by.xpath("//span[contains(text(),'Create New Task')]"));
    }
    SortingLink() {
        return element(by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Sorting']"));
    }
    Activityid() {
        return element(by.xpath("//input[@id='activityid']"));
    }
    Sortinglinkupdate() {
        return element(by.xpath("(//td[text()=' SORTING ']/../td/a)[1]"))
    }
    Tag() {
        return element(by.xpath("(//span[@class='input-text-align'])[4]"));
    }
    selectSubject() {
        return element(by.xpath('//select[@name="subjectNames"]'));
    }
    plusbutton() {
        return element(by.xpath("//button[text()='+']"));
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

    addSlide() {
        return element(by.xpath('//div[@class="add-slide"]'));
    }
    deletebtn() {
        return element(by.xpath("//span[text()='Delete']"));
    }
    Norecored() {
        return element(by.xpath("//td[text()=' No record found. ']"));
    }
    clickOntappingMCQNextBtn() {
        return element(by.xpath("//span[text()='Next ']"))
    }
    publishBtn() {
        return element(by.xpath("//span[contains(text(),'Send To Review')]"))
    }
    succesfulCreationOfTasks() {
        return element(by.xpath("//button[text()='Home']"))
    }
    Audiobutton() {
        return element(by.xpath("//div[text()='Upload Audio File']"));
    }
    Taskcancelbtn() {
        return element(by.xpath("//div[text()='Cancel']"));
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
    Class1() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[contains(text(),'Class 2')]"));
    }
    commentbutton() {
        return element(by.xpath("(//span[contains(text(),'Add Comment')])[1]"))
    }
    Commentsavebtn() {
        return element(by.xpath("//span[contains(text(),'SAVE')]"));
    }
    Previewbreadcrumb() {
        return element(by.xpath("//a[text()=' Task-list']"))
    }
    TaskCancelicon() {
        return element(by.xpath("//button[@class='close mat-icon-button']"));
    }
    Activitytype() {
        return element(by.xpath("(//span[@class='input-text-align'])[2]"));
    }
    saveMCQ() {
        return element(by.xpath("//span[contains(text(),'Save')]"))
    }
    acceptSaveTaskPopUp() {
        return element(by.xpath("//span[text()='OK']"))
    }
    textbox1() {
        return element(by.css("(//input[@type='text'][contains(@class,'text-name')])[1]"))
    }
    textbox2() {
        return element(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[2]"))
    }
    textbox3() {
        return element(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[3]"))
    }
    textbox4() {
        return element(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[4]"))
    }
    textbox5() {
        return element(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[5]"))
    }
    textbox6() {
        return element(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[6]"))
    }
    textbox7() {
        return element(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[7]"))
    }
    textbox8() {
        return element(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[8]"))
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
    typefile13() {
        return element(by.xpath("(//input[@type='file'])[13]"))
    }
    typefile14() {
        return element(by.xpath("(//input[@type='file'])[14]"))
    }
    typefile15() {
        return element(by.xpath("(//input[@type='file'])[15]"))
    }
    typefile16() {
        return element(by.xpath("(//input[@type='file'])[16]"))
    }
    typefile17() {
        return element(by.xpath("(//input[@type='file'])[17]"))
    }
    OKbtn() {
        return element(by.xpath("//button[.='OK']"));
    }
    okbutton() {
        return element(by.xpath("//button[text()='OK']"))
    }
    Addbtn1() {
        return element(by.xpath("(//span[text()='ADD +'])[1]"));
    }
    Addbtn2() {
        return element(by.xpath("(//span[text()='ADD +'])[2]"));
    }
    Textradiobutton() {
        return element(by.xpath("//div[text()='Text ']"))
    }
    optionvalue1() {
        return element(by.xpath("(//option[text()=' 4'])[1]"))
    }
    optionvalue2() {
        return element(by.xpath("(//option[text()=' 1'])[2]"))
    }
    optionvalue3() {
        return element(by.xpath("(//option[text()=' 3'])[3]"))
    }
    optionvalue4() {
        return element(by.xpath("(//option[text()=' 2'])[4]"))
    }
    AnswerTextcheckbox1() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[1]"))
    }
    AnswerTextcheckbox2() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[2]"))
    }
    AnswerTextcheckbox3() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[3]"))
    }
    AnswerTextcheckbox4() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[4]"))
    }
    AnswerTextcheckbox5() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[5]"))
    }
    AnswerTextcheckbox6() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[6]"))
    }
    AnswerTextcheckbox7() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[7]"))
    }
    AnswerTextcheckbox8() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[8]"))
    }
    AnswerTextcheckbox9() {
        return element(by.xpath("(//div[@class='fruits']/div/div/input)[9]"))
    }
    Basketname1() {
        return element(by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[1]"))
    }
    Basketname2() {
        return element(by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[2]"))
    }
    Basketname3() {
        return element(by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[3]"))
    }
    Basketname4() {
        return element(by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[4]"))
    }
    BasketCheckbox1() {
        return element(by.xpath("(//input[@class='checkbox'])[1]"))
    }
    BasketCheckbox2() {
        return element(by.xpath("(//input[@class='checkbox'])[2]"))
    }
    BasketCheckbox3() {
        return element(by.xpath("(//input[@class='checkbox'])[3]"))
    }
    BasketCheckbox4() {
        return element(by.xpath("(//input[@class='checkbox'])[4]"))
    }
    Answercheckbox1() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[1]"))
    }
    Answercheckbox2() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[2]"))
    }
    Answercheckbox3() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[3]"))
    }
    Answercheckbox4() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[4]"))
    }
    Answercheckbox5() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[5]"))
    }
    Answercheckbox6() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[6]"))
    }
    Answercheckbox7() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[7]"))
    }
    Answercheckbox8() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[8]"))
    }
    Answercheckbox9() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[9]"))
    }
    Answercheckbox10() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[10]"))
    }
    Answercheckbox11() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[11]"))
    }
    Answercheckbox12() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[12]"))
    }
    Answercheckbox13() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[13]"))
    }
    Answercheckbox14() {
        return element(by.xpath("(//input[contains(@class,'checkbox')])[14]"))
    }
    Previewheader() {
        return element(by.xpath("//div[contains(text(),'Preview')]"))
    }
    textsource1() {
        return element(by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[1]"))
    }
    textsource2() {
        return element(by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[2]"))
    }
    textsource3() {
        return element(by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[3]"))
    }
    textsource4() {
        return element(by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[4]"))
    }
    textsource5() {
        return element(by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[5]"))
    }
    textsource6() {
        return element(by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[6]"))
    }
    textsource7() {
        return element(by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[7]"))
    }
    texttarget1() {
        return element(by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[1]"))
    }
    texttarget2() {
        return element(by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[2]"))
    }
    texttarget3() {
        return element(by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[3]"))
    }
    imagesource1() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[1]"))
    }
    imagesource2() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[2]"))
    }
    imagesource3() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[3]"))
    }
    imagesource4() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[4]"))
    }
    imagesource5() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[5]"))
    }
    imagesource6() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[6]"))
    }
    imagesource7() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[7]"))
    }
    imagesource8() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[8]"))
    }
    imagesource9() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[9]"))
    }
    imagesource10() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[10]"))
    }
    imagesource11() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[11]"))
    }
    imagesource12() {
        return element(by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[12]"))
    }
    imagetarget1() {
        return element(by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[1]"))
    }
    imagetarget2() {
        return element(by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[2]"))
    }
    imagetarget3() {
        return element(by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[3]"))
    }
    imagetarget4() {
        return element(by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[4]"))
    }
    Checkbtn() {
        return element(by.xpath("//span[text()='Check']"))
    }
    ShowSolutionbtn() {
        return element(by.xpath("//span[text()='Show Solution']"))
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
    Previewpagetext() {
        browser.sleep(2000);
        BrowserUtils.scrollIntoView(by.xpath("//div[text()=' PREVIEW ']"));
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.textsource1(), this.texttarget1());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.textsource2(), this.texttarget1());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.textsource3(), this.texttarget1());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.textsource4(), this.texttarget2());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.textsource5(), this.texttarget2());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.textsource6(), this.texttarget2());
        browser.sleep(2000);
        this.Checkbtn().click();
        browser.sleep(2000);
        this.ShowSolutionbtn().click();
    }
    Previewpageclose() {
        this.sortingcreatepageenglish();
        this.UploadImage();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(1000);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(1000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(1500);
    }
    ClickonRandomArray() {
        var myArray = ['Sorting1a', 'Sorting1.1a', 'Sorting1.2a', 'Sorting1.3a', 'Sorting1.4a', 'Sorting1.5a', 'Sorting1.6a', 'Sorting2.0a', 'Sorting2.1s', 'Sorting2.s2', 'Sorting2.s3', 'Sorting2.4s', 'Sorting2f.5', 'Sorting2.6g', 'Sorting3.0g', 'Sorting3.1g', 'Sorting3.2g', 'Sorting3.g3', 'Sorting3.4g', 'Sorting3.g5', 'Sorting3.6g', 'Sorting4.1g', 'Sorting4.1g', 'Sorting4.2g', 'Sorting4.3g', 'Sorting4.4g', 'Sorting4.g5', 'Sorting4.g6', 'Sorting5.g0', 'Sorting5.g1', 'Sorting5.g2', 'Sorting5.d3', 'Sorting5.4d', 'Sorting5.d5', 'Sorting5.d6', 'Sorting6.d0', 'Sorting6.d1', 'Sorting6.d2', 'Sorting6.w3', 'Sorting6.4w', 'Sorting6.5w', 'Sorting6.6w', 'Sorting1.0w', 'Sorting1.1e1', 'Sorting1.2e1', 'Sorting1.3e1', 'Sorting1.e41', 'Sorting1.51e', 'Sorting1.61e', 'Sorting2.0e1', 'Sorting2.1e1', 'Sorting2.2e1', 'Sorting2.3e1', 'Sorting2.4e1', 'Sorting2.5e1', 'Sorting2.6e1', 'Sorting3.0e1', 'Sorting3.1e1', 'Sorting3.2e1', 'Sorting3.31r', 'Sorting3.41r', 'Sorting3.5r1', 'Sorting3.r61', 'Sorting4r.11', 'Sorting4.1t2', 'Sorting4.2t1', 'Sorting4.t31', 'Sorting4.t41', 'Sorting4.5t1', 'Sorting4.t61', 'Sorting5.0t1', 'Sorting5.1t1', 'Sorting5.2t1', 'Sorting5.3t1', 'Sorting5.4t1', 'Sorting5.51t', 'Sorting5.6u1', 'Sorting6.u01', 'Sorting6.11u', 'Sorting6.2u1', 'Sorting6.31u', 'Sorting6.u41', 'Sorting6.5u1', 'Sorting6.u61', 'Sorting1.21u2', 'Sorting1.12', 'Sorting1.22', 'Sorting1.32i', 'Sorting1.i42', 'Sorting1.5i2', 'Sorting1.6i2', 'Sorting2.0o2', 'Sorting2.12o', 'Sorting2.22o', 'Sorting2.32o', 'Sorting2.4o2', 'Sorting2.52o', 'Sorting2.6o2', 'Sorting3.l02', 'Sorting3.1l2', 'Sorting3.2l2', 'Sorting3.3l2', 'Sorting3.4l2', 'Sorting3.5l2', 'Sorting3.6x2', 'Sorting4.12x', 'Sorting4.12x3', 'Sorting4.22c', 'Sorting4.32c', 'Sorting4.42c', 'Sorting4.52c', 'Sorting4.6c2', 'Sorting5.0c2', 'Sorting5.c12', 'Sorting5.22b', 'Sorting5.3b2', 'Sorting5.4n2', 'Sorting5.52', 'Sorting5.62', 'Sorting6.02', 'Sorting6.12', 'Sorting6.22', 'Sorting6.32', 'Sorting6.42', 'Sorting6.52', 'Sorting6.62'
        ];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;

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
    Previewpageimage() {
        BrowserUtils.waitUntilReady(this.Previewheader());
        browser.sleep(4000);
        BrowserUtils.dragAndDrop(this.imagesource1(), this.imagetarget1());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource2(), this.imagetarget1());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource3(), this.imagetarget1());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource4(), this.imagetarget2());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource5(), this.imagetarget2());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource6(), this.imagetarget2());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource7(), this.imagetarget3());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource8(), this.imagetarget3());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource9(), this.imagetarget3());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource10(), this.imagetarget4());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource11(), this.imagetarget4());
        browser.sleep(2000);
        BrowserUtils.dragAndDrop(this.imagesource12(), this.imagetarget4());
        browser.sleep(2000);
        this.Checkbtn().click();
        browser.sleep(2000);
        this.ShowSolutionbtn().click();
        browser.sleep(4000);
    }
    createImageSortingTask() {
        this.sortingcreatepageenglish();
        this.UploadImage();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(3000);
        BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
        this.acceptSaveTaskPopUp().click();
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(2500);
        this.Previewpageimage();
        browser.sleep(1500);
        this.Publishnavigation();
    }
    createImageSortingTasktelugu() {
        this.sortingcreatepagetelugu();
        this.UploadImage();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(2500);
        this.saveMCQ().click();
        browser.sleep(6000);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(5000);
        this.Previewpageimage();
        browser.sleep(1500);
        this.Publishnavigation();
    }
    createImageSortingTaskenglish() {
        this.sortingcreatepageenglish();
        this.UploadImage();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(3000);
        BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
        this.acceptSaveTaskPopUp().click();
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(2500);
        this.Previewpageimage();
        browser.sleep(1500);
        this.Publishnavigation();
    }
    Updatesortingbylink() {
        browser.sleep(2000);
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                browser.sleep(1000);
                var Subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                BrowserUtils.clickOnElement(Subjectselection);
                browser.sleep(2000);
                var linkselection = by.xpath("(//td[contains(text(),'Draft')]/..//td/span//a[contains(text(),'Sorting')])[1]");
                BrowserUtils.clickOnElement(linkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
                this.clickOntappingMCQNextBtn().click();
                browser.sleep(15000);
                this.okbutton().click();
                browser.sleep(5000);
                this.Previewpageimage();
                browser.sleep(1500);
                this.Publishnavigation();
                this.createNewTaskBtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'sortingTask is updated successfully')
                })
            })
        }
    }
    Previewbackbutton() {
        this.sortingcreatepageenglish();
        this.UploadTextenglish();
        browser.sleep(500);
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
        this.sortingcreatepageenglish();
        this.UploadTextenglish();
        browser.sleep(500);
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
        this.sortingcreatepageenglish();
        this.UploadTextenglish();
        browser.sleep(500);
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
        this.sortingcreatepageenglish();
        this.UploadTextenglish();
        browser.sleep(500);
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
    createTextSortingTask() {
        this.sortingcreatepageenglish();
        this.UploadTextenglish();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
        browser.sleep(2000);
        this.OKbtn().click();
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        this.Previewpagetext();
        browser.sleep(1500);
        this.Publishnavigation();
    }
    createTextSortingTaskenglish() {
        this.sortingcreatepageenglish();
        this.UploadTextenglish();
        browser.sleep(2000);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
        browser.sleep(5000);
        this.OKbtn().click();
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        this.Previewpagetext();
        browser.sleep(1500);
        this.Publishnavigation();
    }
    createTextSortingTasktelugu() {
        this.sortingcreatepagetelugu();
        this.UploadTexttelugu();
        browser.sleep(5000);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
        browser.sleep(5000);
        this.OKbtn().click();
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        this.Previewpagetext();
        browser.sleep(1500);
        this.Publishnavigation();
    }
    Contenttypesearch() {
        var contentsearch = element(by.xpath("//input[@placeholder='All content types']"));
        this.createNewTaskBtn().click();
        browser.sleep(1000);
        contentsearch.sendKeys("Sorting");
        contentsearch.clear();
        browser.sleep(500);
        this.Class1().click();
    }
    Cancelicon() {
        this.sortingcreatepageenglish();
        browser.sleep(2000);
        this.TaskCancelicon().click();
        browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully using cancel icon')
        })
    }
    SearchTaskfromlist() {
        browser.ignoreSynchronization = true
        var clearsearch = element(by.xpath("//input[@class='rv-input']"));
        clearsearch.sendKeys("Sorting");
        BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        browser.sleep(500);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task list search is working')
        })
    }
    Createcancelbutton() {
        this.sortingcreatepageenglish();
        BrowserUtils.scrollIntoView(by.xpath("//div[text()='Cancel']"));
        this.Cancelbtn().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Create cancel button is working successfully')
        })
    }
    CancelTask() {
        this.sortingcreatepagetelugu();
        this.UploadImage();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(2500);
        this.saveMCQ().click();
        browser.sleep(6000);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(2000);
        this.Taskcancelbtn().click();
        browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully')
        })
    }
    UpdateSortingtask() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                browser.sleep(1000);
                var Subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                BrowserUtils.clickOnElement(Subjectselection);
                browser.sleep(2000);
                var linkselection = by.xpath("(//td[contains(text(),'Draft')]/..//td/span//a[contains(text(),'" + record["UpdateRearranging"] + "')])[1]");
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
            expect(dis).toBe(true, 'Sorting Task is updated successfully')
        })

    }
    deleteoptions() {
        this.sortingcreatepageenglish();
        this.UploadImage();
        browser.sleep(1500);
        this.Addbtn1().click();
        browser.sleep(1500);
        this.Addbtn1().click();
        browser.sleep(1500);
        this.Addbtn2().click();
        browser.sleep(1000);
        this.Answercheckbox11().click();
        this.Answercheckbox7().click();
        this.Answercheckbox8().click();
        browser.sleep(1500);
        this.deletebtn().click();
        this.acceptSaveTaskPopUp().click();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(3000);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(1500);
        this.TaskCancelicon().click();
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'delete is working successfully')
        })
    }

    sortingcreatepagetelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(3000);
                this.SortingLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["TaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//select[@class='rv-select w-100 ng-untouched ng-pristine ng-valid'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["sortingTeluguTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["sortingTeluguInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/sorting.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(2500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(6500);
                this.OKbtn().click();
                browser.sleep(1500);
                this.overallfeedbacktelugu();
                browser.sleep(1500);
                this.Createpagecomments();
                browser.sleep(1500);
            })
        }
    }
    sortingcreatepageenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(3000);
                this.SortingLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EnglishTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["sortingEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["sortingEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/sorting.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(5000);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.overallfeedbackenglish();
                browser.sleep(2000);
                this.Createpagecomments();
                browser.sleep(1500);
            })
        }
    }
    UploadTextenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/SortingData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='DELETE']"));
                browser.sleep(1000);
                this.Textradiobutton().click();
                browser.sleep(1500);
                this.acceptSaveTaskPopUp().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[1]"), record["Textbox1"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[2]"), record["Textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[3]"), record["Textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[4]"), record["Textbox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[5]"), record["Textbox5"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[6]"), record["Textbox6"]);
                browser.sleep(500);
                var basket = "../../TestData/ImageFiles/basket.png";
                var basketPath = path.resolve(__dirname, basket);
                this.typefile2().sendKeys(basketPath);
                browser.sleep(1500);
                this.typefile2().sendKeys(basketPath);
                browser.sleep(1500);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[1]"), record["Basketname1"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[2]"), record["Basketname2"]);
                browser.sleep(2000);
                this.BasketCheckbox1().click();
                browser.sleep(200);
                this.AnswerTextcheckbox1().click();
                browser.sleep(200);
                this.AnswerTextcheckbox2().click();
                this.AnswerTextcheckbox3().click();
                browser.sleep(200);
                this.BasketCheckbox2().click();
                browser.sleep(200);
                this.AnswerTextcheckbox4().click();
                this.AnswerTextcheckbox5().click();
                this.AnswerTextcheckbox6().click();
            })
        }
    }
    UploadTexttelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/SortingData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("(//span[text()='ADD +'])[1]"));
                browser.sleep(1000);
                this.Textradiobutton().click();
                browser.sleep(3000);
                this.acceptSaveTaskPopUp().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[1]"), record["Textbox1"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[2]"), record["Textbox2"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[3]"), record["Textbox3"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[4]"), record["Textbox4"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[5]"), record["Textbox5"]);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][contains(@class,'text-name')])[6]"), record["Textbox6"]);
                browser.sleep(500);
                var basket = "../../TestData/ImageFiles/basket.png";
                var basketPath = path.resolve(__dirname, basket);
                this.typefile2().sendKeys(basketPath);
                browser.sleep(5000);
                this.typefile3().sendKeys(basketPath);
                browser.sleep(1500);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[1]"), record["Basketname1"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[2]"), record["Basketname2"]);
                browser.sleep(2000);
                this.BasketCheckbox1().click();
                browser.sleep(200);
                this.AnswerTextcheckbox1().click();
                browser.sleep(200);
                this.AnswerTextcheckbox2().click();
                this.AnswerTextcheckbox3().click();
                browser.sleep(200);
                this.BasketCheckbox2().click();
                browser.sleep(200);
                this.AnswerTextcheckbox4().click();
                this.AnswerTextcheckbox5().click();
                this.AnswerTextcheckbox6().click();
            })
        }
    }

    UploadImage() {
        browser.sleep(3000);
        BrowserUtils.scrollIntoView(by.xpath("//div[text()='Question']"));
        browser.sleep(3000);
        this.Addbtn1().click();
        browser.sleep(300);
        this.Addbtn1().click();
        browser.sleep(300);
        this.Addbtn1().click();
        browser.sleep(300);
        this.Addbtn1().click();
        browser.sleep(300);
        this.Addbtn1().click();
        browser.sleep(300);
        this.Addbtn1().click();
        browser.sleep(300);
        var doveskin = '../../TestData/ImageFiles/capsicum.png';
        var doveskinPath = path.resolve(__dirname, doveskin);
        this.typefile2().sendKeys(doveskinPath);
        browser.sleep(5000);
        var Peacockskin = "../../TestData/ImageFiles/carrot.png";
        var PeacockskinPath = path.resolve(__dirname, Peacockskin);
        this.typefile3().sendKeys(PeacockskinPath);
        browser.sleep(5000);
        var lionskin = "../../TestData/ImageFiles/beans.png";
        var lionskinPath = path.resolve(__dirname, lionskin);
        this.typefile4().sendKeys(lionskinPath);
        browser.sleep(5000);
        var lion = "../../TestData/ImageFiles/Donkey.png";
        var lionPath = path.resolve(__dirname, lion);
        this.typefile5().sendKeys(lionPath);
        browser.sleep(5000);
        var peacock = "../../TestData/ImageFiles/fish.png";
        var peacockPath = path.resolve(__dirname, peacock);
        this.typefile6().sendKeys(peacockPath);
        browser.sleep(2000);
        var dove = "../../TestData/ImageFiles/bheema.jpeg";
        var dovePath = path.resolve(__dirname, dove);
        this.typefile7().sendKeys(dovePath);
        browser.sleep(2000);
        var maths430 = "../../TestData/ImageFiles/maths430.jpeg";
        var maths430Path = path.resolve(__dirname, maths430);
        this.typefile8().sendKeys(maths430Path);
        browser.sleep(2000);
        var maths505 = "../../TestData/ImageFiles/maths505.jpeg";
        var maths505Path = path.resolve(__dirname, maths505);
        this.typefile9().sendKeys(maths505Path);
        browser.sleep(2000);
        var maths666 = "../../TestData/ImageFiles/maths666.jpeg";
        var maths666Path = path.resolve(__dirname, maths666);
        this.typefile10().sendKeys(maths666Path);
        browser.sleep(2000);
        var finger1 = "../../TestData/ImageFiles/finger1.png";
        var finger1Path = path.resolve(__dirname, finger1);
        this.typefile11().sendKeys(finger1Path);
        browser.sleep(2000);
        var finger2 = "../../TestData/ImageFiles/finger2.png";
        var finger2Path = path.resolve(__dirname, finger2);
        this.typefile12().sendKeys(finger2Path);
        browser.sleep(2000);
        var finger3 = "../../TestData/ImageFiles/finger3.png";
        var finger3Path = path.resolve(__dirname, finger3);
        this.typefile13().sendKeys(finger3Path);
        browser.sleep(2000);
        this.Addbtn2().click();
        browser.sleep(300);
        this.Addbtn2().click();
        browser.sleep(300);
        var basket = "../../TestData/ImageFiles/basket.png";
        var basketPath = path.resolve(__dirname, basket);
        this.typefile14().sendKeys(basketPath);
        browser.sleep(2000);
        this.typefile15().sendKeys(basketPath);
        browser.sleep(2000);
        this.typefile16().sendKeys(basketPath);
        browser.sleep(2000);
        this.typefile17().sendKeys(basketPath);
        browser.sleep(2000);
        this.Basketname1().sendKeys("Vegetables");
        browser.sleep(1000);
        this.Basketname2().sendKeys("Livinbeings");
        browser.sleep(2000);
        this.Basketname3().sendKeys("Fingers");
        browser.sleep(1000);
        this.Basketname4().sendKeys("Numbers");
        browser.sleep(2000);
        this.BasketCheckbox1().click();
        browser.sleep(200);
        this.Answercheckbox1().click();
        browser.sleep(200);
        this.Answercheckbox2().click();
        this.Answercheckbox3().click();
        browser.sleep(200);
        this.BasketCheckbox2().click();
        browser.sleep(200);
        this.Answercheckbox4().click();
        this.Answercheckbox5().click();
        this.Answercheckbox6().click();
        browser.sleep(200);
        this.BasketCheckbox3().click();
        browser.sleep(200);
        this.Answercheckbox7().click();
        this.Answercheckbox8().click();
        this.Answercheckbox9().click();
        browser.sleep(200);
        this.BasketCheckbox4().click();
        browser.sleep(200);
        this.Answercheckbox10().click();
        this.Answercheckbox11().click();
        this.Answercheckbox12().click();
    }
    UploadImageenglish() {
        browser.sleep(1000);
        BrowserUtils.scrollIntoView(by.xpath("//button[text()='Delete']"));
        var doveskin = '../../TestData/ImageFiles/capsicum.png';
        var doveskinPath = path.resolve(__dirname, doveskin);
        this.typefile2().sendKeys(doveskinPath);
        browser.sleep(5000);
        var Peacockskin = "../../TestData/ImageFiles/carrot.png";
        var PeacockskinPath = path.resolve(__dirname, Peacockskin);
        this.typefile3().sendKeys(PeacockskinPath);
        browser.sleep(5000);
        var lionskin = "../../TestData/ImageFiles/beans.png";
        var lionskinPath = path.resolve(__dirname, lionskin);
        this.typefile4().sendKeys(lionskinPath);
        browser.sleep(5000);
        var lion = "../../TestData/ImageFiles/donkay.png";
        var lionPath = path.resolve(__dirname, lion);
        this.typefile5().sendKeys(lionPath);
        browser.sleep(5000);
        var peacock = "../../TestData/ImageFiles/fish.png";
        var peacockPath = path.resolve(__dirname, peacock);
        this.typefile6().sendKeys(peacockPath);
        browser.sleep(5000);
        var dove = "../../TestData/ImageFiles/bheema.jpeg";
        var dovePath = path.resolve(__dirname, dove);
        this.typefile7().sendKeys(dovePath);
        browser.sleep(5000);
        var basket = "../../TestData/ImageFiles/basket.png";
        var basketPath = path.resolve(__dirname, basket);
        this.typefile8().sendKeys(basketPath);
        browser.sleep(5000);
        this.typefile9().sendKeys(basketPath);
        browser.sleep(5000);
        this.Basketname1().sendKeys("Vegetables");
        browser.sleep(1000);
        this.Basketname2().sendKeys("Livinbeings");

        browser.sleep(5000);
        this.BasketCheckbox1().click();
        browser.sleep(200);
        this.Answercheckbox1().click();
        browser.sleep(200);
        this.Answercheckbox2().click();
        this.Answercheckbox3().click();
        browser.sleep(200);
        this.BasketCheckbox2().click();
        browser.sleep(200);
        this.Answercheckbox4().click();
        this.Answercheckbox5().click();
        this.Answercheckbox6().click();
    }
    UploadImagetelugu() {
        browser.sleep(1000);
        BrowserUtils.scrollIntoView(by.xpath("//button[text()='Delete']"));
        var doveskin = '../../TestData/ImageFiles/capsicum.png';
        var doveskinPath = path.resolve(__dirname, doveskin);
        this.typefile2().sendKeys(doveskinPath);
        browser.sleep(500);
        var Peacockskin = "../../TestData/ImageFiles/carrot.png";
        var PeacockskinPath = path.resolve(__dirname, Peacockskin);
        this.typefile3().sendKeys(PeacockskinPath);
        browser.sleep(500);
        var lionskin = "../../TestData/ImageFiles/beans.png";
        var lionskinPath = path.resolve(__dirname, lionskin);
        this.typefile4().sendKeys(lionskinPath);
        browser.sleep(500);
        var lion = "../../TestData/ImageFiles/donkay.png";
        var lionPath = path.resolve(__dirname, lion);
        this.typefile5().sendKeys(lionPath);
        browser.sleep(2000);
        var peacock = "../../TestData/ImageFiles/fish.png";
        var peacockPath = path.resolve(__dirname, peacock);
        this.typefile6().sendKeys(peacockPath);
        browser.sleep(2000);
        var dove = "../../TestData/ImageFiles/bheema.jpeg";
        var dovePath = path.resolve(__dirname, dove);
        this.typefile7().sendKeys(dovePath);
        browser.sleep(2000);
        var basket = "../../TestData/ImageFiles/basket.png";
        var basketPath = path.resolve(__dirname, basket);
        this.typefile8().sendKeys(basketPath);
        browser.sleep(2000);
        this.typefile9().sendKeys(basketPath);
        browser.sleep(2000);
        this.Basketname1().sendKeys("కూరగాయలు");
        browser.sleep(1000);
        this.Basketname2().sendKeys("జీవించి ఉన్న");
        browser.sleep(2000);
        this.BasketCheckbox1().click();
        browser.sleep(200);
        this.Answercheckbox1().click();
        browser.sleep(200);
        this.Answercheckbox2().click();
        this.Answercheckbox3().click();
        browser.sleep(200);
        this.BasketCheckbox2().click();
        browser.sleep(200);
        this.Answercheckbox4().click();
        this.Answercheckbox5().click();
        this.Answercheckbox6().click();
    }
    Publishnavigation() {
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(10000);
        BrowserUtils.waitUntilReady(this.publishBtn());
        this.publishBtn().click();
        browser.sleep(10000);
        this.succesfulCreationOfTasks().click();
        browser.sleep(1000);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Tasks is created successfully')
        })
    }


}
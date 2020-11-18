// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('EndToEndAll', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('EndToEndAll', async function() {
    // Test name: EndToEndAll
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3001/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 4 | click | id=projectName | 
    await driver.findElement(By.id("projectName")).click()
    // 5 | type | id=projectName | Test end to end complet
    await driver.findElement(By.id("projectName")).sendKeys("Test end to end complet")
    // 6 | click | id=projectDesc | 
    await driver.findElement(By.id("projectDesc")).click()
    // 7 | type | id=projectDesc | On fait tout le end tout end
    await driver.findElement(By.id("projectDesc")).sendKeys("On fait tout le end tout end")
    // 8 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 9 | type | id=sprintDelay | 3
    await driver.findElement(By.id("sprintDelay")).sendKeys("3")
    // 10 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 11 | type | id=sprintDelay | 4
    await driver.findElement(By.id("sprintDelay")).sendKeys("4")
    // 12 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 13 | doubleClick | id=sprintDelay | 
    {
      const element = await driver.findElement(By.id("sprintDelay"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 14 | click | id=dateEnd | 
    await driver.findElement(By.id("dateEnd")).click()
    // 15 | type | id=dateEnd | 2021-01-15
    await driver.findElement(By.id("dateEnd")).sendKeys("2021-01-15")
    // 16 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 17 | click | css=.clickable-row:nth-child(12) > td:nth-child(3) | 
    await driver.findElement(By.css(".clickable-row:nth-child(12) > td:nth-child(3)")).click()
    // 18 | click | linkText=Sprints | 
    await driver.findElement(By.linkText("Sprints")).click()
    // 19 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 20 | click | linkText=Backlog | 
    await driver.findElement(By.linkText("Backlog")).click()
    // 21 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 22 | mouseOver | css=.btn-sm | 
    {
      const element = await driver.findElement(By.css(".btn-sm"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 23 | mouseOut | css=.btn-sm | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 24 | click | id=entantque | 
    await driver.findElement(By.id("entantque")).click()
    // 25 | select | id=entantque | label=Product Owner
    {
      const dropdown = await driver.findElement(By.id("entantque"))
      await dropdown.findElement(By.xpath("//option[. = 'Product Owner']")).click()
    }
    // 26 | click | css=#entantque > option:nth-child(3) | 
    await driver.findElement(By.css("#entantque > option:nth-child(3)")).click()
    // 27 | click | id=jesouhaite | 
    await driver.findElement(By.id("jesouhaite")).click()
    // 28 | type | id=jesouhaite | a ce super projet
    await driver.findElement(By.id("jesouhaite")).sendKeys("a ce super projet")
    // 29 | click | id=afinde | 
    await driver.findElement(By.id("afinde")).click()
    // 30 | type | id=afinde | pour tout tester
    await driver.findElement(By.id("afinde")).sendKeys("pour tout tester")
    // 31 | click | id=importance | 
    await driver.findElement(By.id("importance")).click()
    // 32 | select | id=importance | label=Moyenne-Basse
    {
      const dropdown = await driver.findElement(By.id("importance"))
      await dropdown.findElement(By.xpath("//option[. = 'Moyenne-Basse']")).click()
    }
    // 33 | click | css=#importance > option:nth-child(3) | 
    await driver.findElement(By.css("#importance > option:nth-child(3)")).click()
    // 34 | click | id=difficulte | 
    await driver.findElement(By.id("difficulte")).click()
    // 35 | select | id=difficulte | label=3
    {
      const dropdown = await driver.findElement(By.id("difficulte"))
      await dropdown.findElement(By.xpath("//option[. = '3']")).click()
    }
    // 36 | click | css=#difficulte > option:nth-child(3) | 
    await driver.findElement(By.css("#difficulte > option:nth-child(3)")).click()
    // 37 | click | id=plannification | 
    await driver.findElement(By.id("plannification")).click()
    // 38 | select | id=plannification | label=Sprint 1
    {
      const dropdown = await driver.findElement(By.id("plannification"))
      await dropdown.findElement(By.xpath("//option[. = 'Sprint 1']")).click()
    }
    // 39 | click | css=#plannification > option:nth-child(2) | 
    await driver.findElement(By.css("#plannification > option:nth-child(2)")).click()
    // 40 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 41 | click | css=.nav-item:nth-child(6) span | 
    await driver.findElement(By.css(".nav-item:nth-child(6) span")).click()
    // 42 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 43 | click | linkText=Backlog | 
    await driver.findElement(By.linkText("Backlog")).click()
    // 44 | click | css=.fa-edit | 
    await driver.findElement(By.css(".fa-edit")).click()
    // 45 | click | css=.modal-body:nth-child(3) #afinde | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #afinde")).click()
    // 46 | type | css=.modal-body:nth-child(3) #afinde | pour tout tester la je modifie
    await driver.findElement(By.css(".modal-body:nth-child(3) #afinde")).sendKeys("pour tout tester la je modifie")
    // 47 | click | css=.modal-body:nth-child(3) #importance | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #importance")).click()
    // 48 | select | css=.modal-body:nth-child(3) #importance | label=Haute
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #importance"))
      await dropdown.findElement(By.xpath("//option[. = 'Haute']")).click()
    }
    // 49 | click | css=.modal-body:nth-child(3) #importance > option:nth-child(1) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #importance > option:nth-child(1)")).click()
    // 50 | click | css=.modal-body:nth-child(3) #difficulte | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte")).click()
    // 51 | select | css=.modal-body:nth-child(3) #difficulte | label=21
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte"))
      await dropdown.findElement(By.xpath("//option[. = '21']")).click()
    }
    // 52 | click | css=.modal-body:nth-child(3) option:nth-child(7) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) option:nth-child(7)")).click()
    // 53 | click | css=.modal-body:nth-child(3) #plannification | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification")).click()
    // 54 | select | css=.modal-body:nth-child(3) #plannification | label=Sprint 2
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #plannification"))
      await dropdown.findElement(By.xpath("//option[. = 'Sprint 2']")).click()
    }
    // 55 | click | css=.modal-body:nth-child(3) #plannification > option:nth-child(3) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification > option:nth-child(3)")).click()
    // 56 | click | css=.modal-footer:nth-child(4) > .btn-success | 
    await driver.findElement(By.css(".modal-footer:nth-child(4) > .btn-success")).click()
    // 57 | click | css=.nav-item:nth-child(6) span | 
    await driver.findElement(By.css(".nav-item:nth-child(6) span")).click()
    // 58 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 59 | click | linkText=Backlog | 
    await driver.findElement(By.linkText("Backlog")).click()
    // 60 | click | css=.fa-trash-alt | 
    await driver.findElement(By.css(".fa-trash-alt")).click()
    // 61 | click | css=.nav-item:nth-child(6) span | 
    await driver.findElement(By.css(".nav-item:nth-child(6) span")).click()
    // 62 | click | css=.nav-item:nth-child(7) span | 
    await driver.findElement(By.css(".nav-item:nth-child(7) span")).click()
    // 63 | click | css=.fa-edit | 
    await driver.findElement(By.css(".fa-edit")).click()
    // 64 | click | css=.modal-body:nth-child(3) #plannification | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification")).click()
    // 65 | select | css=.modal-body:nth-child(3) #plannification | label=-
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #plannification"))
      await dropdown.findElement(By.xpath("//option[. = '-']")).click()
    }
    // 66 | click | css=.modal-body:nth-child(3) #plannification > option:nth-child(1) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification > option:nth-child(1)")).click()
    // 67 | click | css=.modal-footer:nth-child(4) > .btn-success | 
    await driver.findElement(By.css(".modal-footer:nth-child(4) > .btn-success")).click()
    // 68 | click | css=.nav-item:nth-child(6) span | 
    await driver.findElement(By.css(".nav-item:nth-child(6) span")).click()
    // 69 | click | css=.nav-item:nth-child(7) span | 
    await driver.findElement(By.css(".nav-item:nth-child(7) span")).click()
    // 70 | click | css=.fa-trash-alt | 
    await driver.findElement(By.css(".fa-trash-alt")).click()
  })
})
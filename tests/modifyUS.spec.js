// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('ModifyUS', function() {
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
  it('ModifyUS', async function() {
    // Test name: ModifyUS
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3001/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.clickable-row:nth-child(3) > td:nth-child(1) | 
    await driver.findElement(By.css(".clickable-row:nth-child(3) > td:nth-child(1)")).click()
    // 4 | click | css=.nav-item:nth-child(7) span | 
    await driver.findElement(By.css(".nav-item:nth-child(7) span")).click()
    // 5 | click | css=.fa-edit | 
    await driver.findElement(By.css(".fa-edit")).click()
    // 6 | click | css=.modal-body:nth-child(3) #afinde | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #afinde")).click()
    // 7 | type | css=.modal-body:nth-child(3) #afinde | pour tester et modifier
    await driver.findElement(By.css(".modal-body:nth-child(3) #afinde")).sendKeys("pour tester et modifier")
    // 8 | click | css=.modal-body:nth-child(3) #jesouhaite | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #jesouhaite")).click()
    // 9 | click | css=.modal-body:nth-child(3) #jesouhaite | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #jesouhaite")).click()
    // 10 | type | css=.modal-body:nth-child(3) #jesouhaite | je modifier une user story
    await driver.findElement(By.css(".modal-body:nth-child(3) #jesouhaite")).sendKeys("je modifier une user story")
    // 11 | click | css=.modal-body:nth-child(3) #entantque | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #entantque")).click()
    // 12 | select | css=.modal-body:nth-child(3) #entantque | label=Product Owner
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #entantque"))
      await dropdown.findElement(By.xpath("//option[. = 'Product Owner']")).click()
    }
    // 13 | click | css=.modal-body:nth-child(3) #entantque > option:nth-child(3) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #entantque > option:nth-child(3)")).click()
    // 14 | click | css=.modal-body:nth-child(3) #importance | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #importance")).click()
    // 15 | select | css=.modal-body:nth-child(3) #importance | label=Haute
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #importance"))
      await dropdown.findElement(By.xpath("//option[. = 'Haute']")).click()
    }
    // 16 | click | css=.modal-body:nth-child(3) #importance > option:nth-child(1) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #importance > option:nth-child(1)")).click()
    // 17 | click | css=.modal-body:nth-child(3) #difficulte | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte")).click()
    // 18 | select | css=.modal-body:nth-child(3) #difficulte | label=13
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte"))
      await dropdown.findElement(By.xpath("//option[. = '13']")).click()
    }
    // 19 | click | css=.modal-body:nth-child(3) option:nth-child(6) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) option:nth-child(6)")).click()
    // 20 | click | css=.modal-body:nth-child(3) #plannification | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification")).click()
    // 21 | select | css=.modal-body:nth-child(3) #plannification | label=-
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #plannification"))
      await dropdown.findElement(By.xpath("//option[. = '-']")).click()
    }
    // 22 | click | css=.modal-body:nth-child(3) #plannification > option:nth-child(1) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification > option:nth-child(1)")).click()
    // 23 | click | css=.modal-footer:nth-child(4) > .btn-success | 
    await driver.findElement(By.css(".modal-footer:nth-child(4) > .btn-success")).click()
  })
})

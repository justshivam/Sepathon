from selenium import webdriver

def calculateWebsiteFootprint(url):
    driver_options = webdriver.ChromeOptions()
    driver_options.add_argument('--headless=new')
    driver = webdriver.Chrome(options=driver_options)
    #implicit wait
    driver.implicitly_wait(0.5)
    #url launch
    driver.get(url)
    #JavaScript command to traffic
    r = driver.execute_script("return window.performance.getEntries();")
    total_transfer = 0
    for res in r:
        if res.get('transferSize') is not None:
            total_transfer += res['transferSize']
    #browser close
    driver.close()
    return total_transfer

if __name__ == '__main__':
    print(calculateWebsiteFootprint('https://www.google.com/'))
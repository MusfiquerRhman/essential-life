import Button from '@mui/material/Button';
import React from 'react';

function SeedDownload() {
  return (
    <section>
      <h1>Seed Download</h1>
      <div className='flex__row form__container'>
        <div>
          <select name="Languages" id="language" defaultValue={'english'} style={{background: '#fff'}}>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="portugese">Portugese</option>
            <option value="japaness">Japaness</option>
          </select>
        </div>

        <Button
          variant='contained'
          sx={{ borderRadius: '5rem', marginRight: '2.5rem', marginLeft: '2.5rem' }}
        >
          Download Elements Seed
        </Button>

        <Button
          variant='contained'
          sx={{ borderRadius: '5rem' }}
        >
          Download Comunity Authors Seed
        </Button>

      </div>

    </section>
  )
}

export default SeedDownload
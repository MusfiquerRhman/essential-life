import React from 'react';

function SolutionType(props) {
  const {
    setSolution,
    setOil,
    setSupplement,
    setBlend,
    oil,
    blend,
    supplement,
    solution,
  } = props;

  const onChangeSolution = (e) => {
    setSolution(e.target.value);
  }

  const onChangeOil = (e) => {
    setOil(e.target.value);
  }

  const onChangeBlend = (e) => {
    setBlend(e.target.value);
  }

  const onChangeSupplement = (e) => {
    setSupplement(e.target.value);
  }

  return (
    <>
      <div className='solution__form--item'>
        <label htmlFor="solutions" className='form__label'>Solution</label>
        <select name="solutions" id="type" className='full__length form__select' onChange={onChangeSolution} value={solution}  style={{marginBottom: '1rem'}}>
          <option disabled value="">Choose an option</option>
          <option value="oil">Oil</option>
          <option value="blend">Blend</option>
          <option value="supplement">Supplement</option>
        </select>
      </div>
      {
        solution === '' && (
          <div className='solution__form--item'>
            <label className='form__label'>{'\u00A0'}</label>
            <select disabled name="solutions" id="type" className='full__length form__select' onChange={onChangeSolution} value={solution}  style={{marginBottom: '1rem'}}>
              <option disabled value="">{'\u00A0'}</option>
            </select>
          </div>
        )
      }

      {
        solution === 'oil' && (
          <div className='solution__form--item'>
            <label htmlFor="oil" className='form__label'>Oil</label>
            <select name="oil" id="type" className='full__length form__select' onChange={onChangeOil} value={oil}  style={{marginBottom: '1rem'}}>
              <option disabled value="">Choose an Oil</option>
              <option value="oil">Oil</option>
              <option value="blend">Blend</option>
              <option value="supplement">Supplement</option>
            </select>
          </div>
        )
      }
      {
        solution === 'blend' && (
          <div className='solution__form--item'>
            <label htmlFor="blend" className='form__label'>Blend</label>
            <select name="blend" id="type" className='full__length form__select' onChange={onChangeBlend} value={blend}  style={{marginBottom: '1rem'}}>
              <option disabled value="">Choose a Blend</option>
              <option value="oil">Oil</option>
              <option value="blend">Blend</option>
              <option value="supplement">Supplement</option>
            </select>
          </div>
        )
      }
      {
        solution === 'supplement' && (
          <div className='solution__form--item'>
            <label htmlFor="supplement" className='form__label'>Supplement</label>
            <select name="supplement" id="type" className='full__length form__select' onChange={onChangeSupplement} value={supplement}  style={{marginBottom: '1rem'}}>
              <option disabled value="">Choose a Supplement</option>
              <option value="oil">Oil</option>
              <option value="blend">Blend</option>
              <option value="supplement">Supplement</option>
            </select>
          </div>
        )
      }
    </>
  )
}

export default SolutionType
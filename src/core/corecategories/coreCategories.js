import React from 'react';
import axios from 'axios'
import { getCategories }from '../../helpers/serviceHelper'

class CoreCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      categories: [],
    }
  }

  componentDidMount =  () => {
    this.setState({ user: this.props.loggingIn.user })

    this.getCategories();
  }

  getCategories = async () => {
    var response = await getCategories()
    this.setState({ categories: response})
    console.log(response)
  }

  subCategories = (categoriesSlug) => {
    
    this.props.history.push(`/subcategory/${categoriesSlug.slug}`)

  }

}

export default CoreCategory
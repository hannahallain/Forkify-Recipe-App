import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found! Please try again.`;
  _message = ``;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();

//preview__link--active

//<div class="preview__user-generated">
// <svg>
//  <use href="${icons}#icon-user"></use>
// </svg>
//</div>

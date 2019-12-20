const textColorClass = 'text-pink-600'

function createParagraphContent (paragraphData) {
  let paragraphText = ''

  paragraphData.forEach(function (content) {
    switch (content.nodeType) {
      case 'text':
        paragraphText += createTextValue(content.value, content.marks)
        break
      case 'hyperlink':
        paragraphText += createHyperlinkValue(content.content, content.data.uri)
        break
    }
  })

  return paragraphText
}

function createTextValue (value, marks) {
  let newValue = value
  if (newValue === '') { return '' }
  if (marks.length === 0) { return newValue }

  marks.forEach(function (mark) {
    switch (mark.type) {
      case 'bold':
        newValue = textBold(newValue)
        break
      case 'italic':
        newValue = textItalic(newValue)
        break
    }
  })
  return newValue
}

function createHyperlinkValue (content, link) {
  const linkText = createParagraphContent(content)
  return '<a href="' + link + '">' + linkText + '</a>'
}

function textBold (value) {
  return '<b class="' + textColorClass + '">' + value + '</b>'
}

function textItalic (value) {
  return '<i>' + value + '</i>'
}

module.exports = {
  convertRichTextToUpdatedArray (paragraphData) {
    return createParagraphContent(paragraphData)
  }
}

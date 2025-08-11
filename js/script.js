const IDEAS = {
  'colleagues': {
    'funny': {
      'min': {
        'what': {
          'title': 'Стикеры для рабочего чата',
          'text': 'Даже не самые смешные фразы коллег могут заиграть новыми красками в формате стикеров. Современные сервисы облегчили нам задачу: теперь их можно сделать в несколько простых действий.'
        },
        'how': {
          'text': 'Прошерстите переписки на предмет забавных фраз и сделайте скриншоты. Если не хотите создавать стикеры вручную, воспользуйтесь специальными приложениями (например, Sticker Maker). Загрузите картинки, а оно само создаст набор. Вуаля, теперь вы самый смешной человек на работе!'
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    },
    'inspiring': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    },
    'useful': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    }
  },
  'partner': {
    'funny': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    },
    'inspiring': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    },
    'useful': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    }
  },
  'family': {
    'funny': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    },
    'inspiring': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    },
    'useful': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    }
  },
  'friends': {
    'funny': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    },
    'inspiring': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    },
    'useful': {
      'min': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      },
      'max': {
        'what': {
          'title': '',
          'text': ''
        },
        'how': {
          'text': ''
        }
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {

  const form = document.querySelector('form.settings');
  const recipientInputs = document.querySelectorAll('input[name="recipient"]');
  const vibeInputs = document.querySelectorAll('input[name="vibe"]');
  const colorInputs = document.querySelectorAll('input[name="color"]');
  const btnSubmit = document.querySelector('.btn-submit');
  const videoBlock = document.querySelector('.video');
  const ideaBackground = document.querySelector('.idea-background');
  const ideaTitle = document.querySelector('.idea-title');
  const ideaWhatText = document.querySelector('.idea-what-text');
  const ideaHowText = document.querySelector('.idea-how-text');

  if (recipientInputs.length === 0 || vibeInputs.length === 0 || colorInputs.length === 0 || !btnSubmit || !videoBlock || !ideaBackground) {
    return;
  }

  const randomRecipientIndex = Math.floor(Math.random() * recipientInputs.length);
  const randomVibeIndex = Math.floor(Math.random() * vibeInputs.length);
  const randomColorIndex = Math.floor(Math.random() * colorInputs.length);
  const randomRecipientInput = recipientInputs[randomRecipientIndex];
  const randomVibeInput = vibeInputs[randomVibeIndex];
  const randomColorInput = colorInputs[randomColorIndex];
  randomRecipientInput.checked = true;
  randomVibeInput.checked = true;
  randomColorInput.checked = true;

  function updateSelectedRecipientValue() {
    const selected = document.querySelector('input[name="recipient"]:checked');
    if (selected) {
      form.dataset.selectedRecipient = selected.value;
    }
  }

  function updateSelectedVibeValue() {
    const selected = document.querySelector('input[name="vibe"]:checked');
    if (selected) {
      form.dataset.selectedVibe = selected.value;
    }
  }

  function updateSelectedColorValue() {
    const selected = document.querySelector('input[name="color"]:checked');
    if (selected) {
      form.dataset.selectedColor = selected.value;
    }
  }

  updateSelectedRecipientValue();
  updateSelectedVibeValue();
  updateSelectedColorValue();

  recipientInputs.forEach(input => {
    input.addEventListener('change', function() {
      updateSelectedRecipientValue();
    });
  });

  vibeInputs.forEach(input => {
    input.addEventListener('change', function() {
      updateSelectedVibeValue();
    });
  });

  colorInputs.forEach(input => {
    input.addEventListener('change', function() {
      updateSelectedColorValue();
    });
  });

  btnSubmit.addEventListener('click', function(event) {

    event.preventDefault();

    const selectedRecipient = form.dataset.selectedRecipient || (document.querySelector('input[name="recipient"]:checked')?.value);
    const selectedVibe = form.dataset.selectedVibe || (document.querySelector('input[name="vibe"]:checked')?.value);
    const selectedDiff = 'min';
    ideaTitle.insertAdjacentText('afterbegin', IDEAS[selectedRecipient][selectedVibe][selectedDiff].what.title);
    ideaWhatText.insertAdjacentText('afterbegin', IDEAS[selectedRecipient][selectedVibe][selectedDiff].what.text);
    ideaHowText.insertAdjacentText('afterbegin', IDEAS[selectedRecipient][selectedVibe][selectedDiff].how.text);

    const selectedColor = form.dataset.selectedColor || (document.querySelector('input[name="color"]:checked')?.value);
    if (selectedColor) {
      ideaBackground.style.backgroundColor = selectedColor;
    }

    videoBlock.style.opacity = '0';

  });

});

import {modalReducer, initialState} from './modal.ts'
import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal';

describe('modal reducer', () => {
    it('should return the initial state', () => {
        expect(modalReducer(undefined, {})).toEqual(
          {
            isOpen: false,
            content: null,
            title: ''
          }
        )
    })
    it('should show modal', () => {
        expect(
            modalReducer(undefined, {
              type: OPEN_MODAL,
              payload: {
                title: 'modal',
                content: null
              }
            })
          ).toEqual(
            {
              title: 'modal',
              content: null,
              isOpen: true
            }
          )
    })
    it('should close modal', () => {
      expect(
          modalReducer({
            isOpen: true,
            content: null,
            title: ''
          }, {
            type: CLOSE_MODAL
          })
        ).toEqual(
          {
            content: null,
            isOpen: false,
            title: ''
          }
        )
  })
})
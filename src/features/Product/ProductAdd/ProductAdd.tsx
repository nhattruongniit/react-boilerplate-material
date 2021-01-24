import React, { useEffect, useState, useReducer, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

// material core
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';

// material icon
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';

// atomic
import TypographyBase from 'components/atoms/TypographyBase';
import IconButton from 'components/atoms/IconButton';
import { TextFieldShrink } from 'components/molecules/TextField';
import { AutoCompleteComboBox } from 'components/molecules/AutoComplete';
import { AlertConfirm } from 'components/molecules/AlertBase';

// types
import { IParams } from 'models/IRoutes';

// redux
import { setSnackBar } from 'actions/app.action';

// useReducer
import { initialValues, reducer, actionTypes } from './useReducer';

// components
import FieldDescription from './components/FieldDescription';
import FieldArtistName from './components/FieldArtistName';
import FieldArtistNameRomanized from './components/FieldArtistNameRomanized';

// mock data
import * as mockData from './mockData';

// styles
import useStyles from './styles';

function ArtistAdd() {
  const params = useParams<IParams>();
  const idParam = params?.id;
  const classes = useStyles();
  const dispatchRedux = useDispatch();
  const [{ enumArtistType, enumArtistLink, isAcceptDuplicated, modalConfirmLocale }, dispatch] = useReducer(
    reducer,
    initialValues,
  );
  const { t: translate } = useTranslation();
  const [valueArtistName, setValueArtistName] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [isErrorDescription, setIsErrorDescription] = useState<boolean>(false);
  const [artistType, setArtistType] = useState<any | null>(null);
  const [artistName, setArtistName] = useState<any>({
    name: '',
    romanizedName: '',
    locale: null,
    display: true,
    primaryLocale: true,
  });
  const aliasData: any = {
    id: Date.now().toString(),
    name: '',
    romanizedName: '',
    locale: null,
    display: false,
    primaryLocale: false,
  };
  const [aliases, setAliases] = useState<any[]>([{ ...aliasData }]);
  const externalLinkData: any = {
    id: Date.now().toString(),
    linkId: '',
    linkType: null,
  };
  const [externalLinkList, setExternalLinkList] = useState<any[]>([{ ...externalLinkData }]);
  const [keyResetAutoCompleteArtistLocale, setKeyResetAutoCompleteArtistLocale] = useState<number>(0);
  const [keyResetDescription, setKeyResetDescription] = useState<number>(0);
  const [keyResetArtistName, setKeyResetArtistName] = useState<number>(0);
  const refKeepCurrentPrimaryNameLocale = useRef<any | null>(null);

  useEffect(() => {
    async function fetchDataProduct() {
      // set data of description
      setDescription('truong');
      setKeyResetDescription(Date.now());
    }
    if (idParam) {
      fetchDataProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idParam]);

  function handleAddAlias() {
    setAliases([...aliases, { ...aliasData }]);
  }

  const handleDeleteAliases = (index: number) => () => {
    setAliases((prevAliases: any) => prevAliases.filter((_: any, i: number) => index !== i));
  };

  function hanldeAddExternalLink() {
    setExternalLinkList([...externalLinkList, { ...externalLinkData }]);
  }

  const handleDeleteExternalLink = (index: number) => () => {
    setExternalLinkList((prevExternalLinkList: any) => prevExternalLinkList.filter((_: any, i: number) => index !== i));
  };

  const handleExternalLinkChange = useCallback(
    (index: number, name: string) => (value: string) => {
      setExternalLinkList((prevExternalLinkList: any) =>
        prevExternalLinkList.map((list: any, i: number) => {
          if (index === i) {
            return { ...list, [name]: value };
          }
          return list;
        }),
      );
    },
    [],
  );

  const handleAliasesChange = useCallback(
    (index: number, name: string) => (value: any) => {
      setAliases((pr) =>
        aliases.map((alias, i) => {
          if (index === i) {
            return { ...alias, [name]: value };
          }
          return alias;
        }),
      );
    },
    [],
  );
  const handleArtistNameChange = useCallback((name: string, value: string) => {
    setArtistName((prevAristName: any) => {
      return { ...prevAristName, [name]: value };
    });
  }, []);

  const renderCheckBoxLocale = (alias: any): Boolean => {
    if (artistName.locale && alias.locale && Object.getOwnPropertyNames(alias.locale).length > 0) {
      return !(alias.locale?.id === artistName.locale?.id);
    }
    return true;
  };

  const checkAliasLocale = (index: number, checked: boolean, currentLocale: any) => {
    const isExistLocale = aliases.some((item) => item.locale?.id === currentLocale.locale?.id && item.primaryLocale);
    const newAliases = [...aliases];
    newAliases[index].primaryLocale = checked;
    setAliases(newAliases);

    if (!checked) return;

    if (isExistLocale) {
      dispatch({
        type: actionTypes.SET_MODAL_PRIMARY_LOCALE,
        payload: {
          isShow: true,
          type: 'check-alias-locale',
          currentLocale,
          indexLocale: index,
        },
      });
    }
  };

  function checkPrimaryNameLocale(currentLocale: any | null) {
    const isExistLocale = aliases.some((item) => item.locale && item.locale.id === currentLocale?.id && item.primaryLocale);

    const newArtistName = { ...artistName };
    newArtistName.locale = currentLocale;
    setArtistName(newArtistName);

    if (isExistLocale) {
      dispatch({
        type: actionTypes.SET_MODAL_PRIMARY_LOCALE,
        payload: {
          isShow: true,
          type: 'check-primary-locale',
          currentLocale,
        },
      });
      return;
    }
    refKeepCurrentPrimaryNameLocale.current = currentLocale;
  }

  function closeModalPrimaryLocale() {
    dispatch({
      type: actionTypes.SET_MODAL_PRIMARY_LOCALE,
      payload: {
        isShow: false,
        type: '',
        currentLocale: null,
        indexLocale: null,
      },
    });

    if (modalConfirmLocale.type === 'check-primary-locale') {
      const newArtistName = { ...artistName };
      setKeyResetAutoCompleteArtistLocale(Date.now());
      if (refKeepCurrentPrimaryNameLocale.current) {
        newArtistName.locale = refKeepCurrentPrimaryNameLocale.current;
        setArtistName(newArtistName);
        return;
      }
      newArtistName.locale = null;
      setArtistName(newArtistName);
    }

    if (modalConfirmLocale.type === 'check-alias-locale') {
      const newAliases = [...aliases];
      newAliases[modalConfirmLocale.indexLocale].primaryLocale = false;
      setAliases(newAliases);
    }
  }

  function submitModalPrimaryLocale() {
    dispatch({
      type: actionTypes.SET_MODAL_PRIMARY_LOCALE,
      payload: {
        isShow: false,
        type: '',
        currentLocale: null,
      },
    });

    if (modalConfirmLocale.type === 'check-primary-locale') {
      const newArtistName = { ...artistName };
      newArtistName.locale = modalConfirmLocale.currentLocale;
      aliases.forEach((item: any) => {
        if (item.locale?.id === modalConfirmLocale.currentLocale.id) {
          item.primaryLocale = false;
        }
      });
      setArtistName(newArtistName);
    }

    if (modalConfirmLocale.type === 'check-alias-locale') {
      aliases.forEach((item: any) => {
        if (item.locale?.id === modalConfirmLocale.currentLocale.locale.id) {
          item.primaryLocale = false;
        }
      });
      const newAliases = [...aliases];
      newAliases[modalConfirmLocale.indexLocale].primaryLocale = true;
      setAliases(newAliases);
    }
  }

  function prepareDataToCreateProduct() {
    // data of artist name vs aliases
    const artistNameList: any[] = [{ ...artistName }];
    aliases.forEach((alias) => {
      if (alias.name !== '') {
        const newAlias = {
          display: alias.display,
          locale: alias.locale,
          name: alias.name,
          primaryLocale: alias.primaryLocale,
          romanizedName: alias.romanizedName,
        };
        artistNameList.push(newAlias);
      }
    });
    // data of externalLink
    const newExternal: any[] = [];
    externalLinkList.forEach((ele: any) => {
      if (ele.linkType || ele.linkId) {
        const newLink = {
          linkId: ele.linkId,
          linkType: ele.linkType,
        };
        newExternal.push(newLink);
      }
    });
    // final data
    const bodyData = {
      artistNameList,
      description,
      artistType,
      externalLinkList: newExternal,
    };

    return bodyData;
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // check validate external link
    const isValidExternal = externalLinkList.some(
      (item) => !((item.linkId && item.linkType) || (!item.linkId && !item.linkType)),
    );
    if (isValidExternal) {
      dispatchRedux(
        setSnackBar({
          isShow: true,
          type: 'error',
          content: 'Please enter Link!',
        }),
      );
      return;
    }

    // update artist
    if (params.id) {
      console.log('exteralLink: ', externalLinkList);
      console.log('artistName: ', artistName);
      console.log('aliases: ', aliases);
      return;
    }

    // create product
    const bodyData = prepareDataToCreateProduct();
    console.log('create product: ', bodyData);
  };

  console.log('aliase: ', aliases);

  return (
    <>
      <h1>{params.id ? 'Edit Product' : 'Create Product'}</h1>
      <Paper className={classes.paper}>
        <br />
        <form onSubmit={onSubmit}>
          <Grid>
            <div className={classes.head}>
              <div className={classes.headTitle}>
                <span className={classes.textError}>*</span>Artist Name
              </div>
              <div className={classes.headLead}>
                This information is listed on all content on ACM so it must be correct. In most cases, it is the same as found on
                releases.
              </div>
            </div>
          </Grid>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FieldArtistName
                keyReset={keyResetArtistName}
                data={artistName.name}
                valueArtistName={valueArtistName}
                setValueArtistName={setValueArtistName}
                handleArtistNameChange={handleArtistNameChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FieldArtistNameRomanized
                keyReset={keyResetArtistName}
                data={artistName.romanizedName}
                handleArtistNameChange={handleArtistNameChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AutoCompleteComboBox
                key={keyResetAutoCompleteArtistLocale}
                id="artist-language"
                label="Language"
                data={mockData.locales || []}
                value={artistName.locale}
                getOptionSelected={(option) => option.id === artistName.locale?.id}
                getOptionLabel={(option: any) => option.name}
                placeholder="Search for a language"
                renderOption={(option: any, { inputValue }) => {
                  const matches = match(option.name, inputValue);
                  const parts = parse(option.name, matches);
                  return (
                    <div>
                      {parts.map((part, index) => (
                        <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                          {part.text}
                        </span>
                      ))}
                    </div>
                  );
                }}
                onChangeValue={(value: any | null) => {
                  checkPrimaryNameLocale(value);
                }}
              />
              <TypographyBase color="textSecondary" component="div">
                This is the primary name for this region
              </TypographyBase>
            </Grid>
          </Grid>
          <br />
          <Grid>
            <div className={classes.head}>
              <div className={classes.headTitle}>Aliases</div>
              <div className={classes.headLead}>
                An alias name or AKA (also known as) is any name that has been used by the Artist. One Artist can have multiple
                aliases.
              </div>
            </div>
          </Grid>
          <br />
          {aliases.map((alias, index) => {
            return (
              <Grid key={alias.id} container spacing={2} className={classes.aliasArtist}>
                <Grid item xs={12} md={4}>
                  <TextFieldShrink
                    id={`artistName-${alias.id}`}
                    name="name"
                    value={alias.name}
                    title="Artist Name (Alias)"
                    placeholder="Input Artist Name"
                    variant="outlined"
                    onChangeValue={handleAliasesChange(index, 'name')}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextFieldShrink
                    id={`romanizedName-${alias.id}`}
                    name="romanizedName"
                    value={alias.romanizedName}
                    showTooltip
                    titleTooltip="If the Artist Name has non-roman characters like Chinese, enter the romanized version here"
                    title="Romanized Name"
                    placeholder="Input Romanized Version"
                    variant="outlined"
                    onChangeValue={handleAliasesChange(index, 'romanizedName')}
                  />
                </Grid>
                <Grid container item wrap="nowrap" xs={12} md={4}>
                  <div className={classes.aliasLocales}>
                    <AutoCompleteComboBox
                      id={`locales-${alias.id}`}
                      label="Language"
                      value={alias.locale}
                      getOptionSelected={(option) => option.id === alias.locale?.id}
                      data={mockData.locales || []}
                      getOptionLabel={(option: any) => option.name}
                      placeholder="Search for a language"
                      renderOption={(option: any, { inputValue }) => {
                        const matches = match(option.name, inputValue);
                        const parts = parse(option.name, matches);
                        return (
                          <div>
                            {parts.map((part: any, idx: number) => (
                              <span key={idx} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                {part.text}
                              </span>
                            ))}
                          </div>
                        );
                      }}
                      onChangeValue={(value: any | null) => {
                        const newAliases = [...aliases];
                        newAliases[index].locale = value;
                        newAliases[index].primaryLocale = false;
                        setAliases(newAliases);
                      }}
                    />
                    {renderCheckBoxLocale(alias) ? (
                      <TypographyBase color="textSecondary" component="div" className={classes.checkLocales}>
                        <FormControlLabel
                          label="This is the primary alias for this region"
                          control={
                            <Checkbox
                              id={`checkbox-locale-${alias.id}`}
                              color="primary"
                              name="primaryLocale"
                              checked={Boolean(alias.primaryLocale && alias.locale)}
                              disabled={!alias.locale || !alias.locale.id}
                              onChange={(e) => {
                                checkAliasLocale(index, e.target.checked, alias);
                              }}
                            />
                          }
                        />
                      </TypographyBase>
                    ) : null}
                  </div>
                  {aliases.length > 1 ? (
                    <div className={classes.iconClose}>
                      <IconButton
                        id={`button-close-${alias.id}`}
                        title="Delete"
                        color="secondary"
                        onClick={handleDeleteAliases(index)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                  ) : null}
                </Grid>
              </Grid>
            );
          })}
          <Grid container justify="flex-end">
            <Button id="button-add-alias" color="primary" disabled={aliases.length >= 20} onClick={handleAddAlias}>
              ADD MORE
            </Button>
          </Grid>
          <Grid>
            <div className={classes.head}>
              <div className={classes.headTitle}>Artist Information</div>
            </div>
          </Grid>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <FieldDescription
                keyReset={keyResetDescription}
                data={description}
                setIsErrorDescription={setIsErrorDescription}
                isErrorDescription={isErrorDescription}
                setDescription={setDescription}
              />
            </Grid>
          </Grid>
          <Grid>
            <div className={classes.head}>
              <div className={classes.headTitle}>PRO - IPI Code</div>
              <div className={classes.headLead}>
                An IPI number is an international identification number assigned to songwriters and publishers by <br />
                their Performing RightsOrgination (PRO) to uniquely identify them as rights holders
              </div>
            </div>
          </Grid>
          <br />
          <br />
          <br />
          {externalLinkList &&
            externalLinkList.map((external, index) => {
              return (
                <Grid key={external.id} container spacing={2} className={classes.externalLink}>
                  <Grid item xs={12} md={4}>
                    <AutoCompleteComboBox
                      id={`artist-linkType-${external.id}`}
                      label="Link Type"
                      value={external.linkType}
                      getOptionSelected={(option) => option.id === external.linkType?.id}
                      data={enumArtistLink || []}
                      getOptionLabel={(option: any) => option.value}
                      placeholder="Search for a Link Type"
                      error={Boolean(external.linkId !== '' && !external.linkType)}
                      renderOption={(option: any, { inputValue }) => {
                        const matches = match(option.value, inputValue);
                        const parts = parse(option.value, matches);
                        return (
                          <div>
                            {parts.map((part, idx) => (
                              <span key={idx} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                {part.text}
                              </span>
                            ))}
                          </div>
                        );
                      }}
                      onChangeValue={(value: any | null) => {
                        const newExternal = [...externalLinkList];
                        newExternal[index].linkType = value;
                        setExternalLinkList(newExternal);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextFieldShrink
                      id={`artist-linkId-${external.id}`}
                      title="Link ID"
                      placeholder="Input Link ID or an URL"
                      variant="outlined"
                      value={external.linkId}
                      error={Boolean(external.linkId === '' && external.linkType)}
                      onChangeValue={handleExternalLinkChange(index, 'linkId')}
                    />
                  </Grid>
                  <Grid item xs={12} md={1}>
                    {externalLinkList && externalLinkList.length > 1 ? (
                      <div className={classes.iconClose}>
                        <IconButton
                          id={`button-close-link-${external.id}`}
                          title="Delete"
                          color="secondary"
                          onClick={handleDeleteExternalLink(index)}
                        >
                          <CloseIcon />
                        </IconButton>
                      </div>
                    ) : null}
                  </Grid>
                </Grid>
              );
            })}
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} />
            <Grid container item xs={12} md={4} justify="flex-end">
              <Button
                id="button-add-link"
                color="primary"
                disabled={externalLinkList && externalLinkList.length >= 10}
                onClick={hanldeAddExternalLink}
              >
                ADD MORE
              </Button>
            </Grid>
          </Grid>
          <br />
          <Grid container justify="flex-end" className={classes.boxButtons}>
            <Button
              id="button-cancel"
              type="button"
              variant="outlined"
              color="primary"
              onClick={() =>
                dispatch({
                  type: actionTypes.SET_MODAL_CONFIRM_QUIT_ARTIST,
                  payload: true,
                })
              }
            >
              CANCEL
            </Button>
            <Button
              id="button-submit"
              type="submit"
              variant="contained"
              color="primary"
              startIcon={params.id ? <SaveIcon /> : <GroupAddIcon />}
            >
              {params.id ? 'Edit Product' : 'Create Product'}
            </Button>
          </Grid>
        </form>
      </Paper>

      <AlertConfirm
        open={modalConfirmLocale.isShow}
        alertTitle="Set Primary Region"
        alertContent="Set this name as the primary for this region?"
        onClose={closeModalPrimaryLocale}
        onSubmit={submitModalPrimaryLocale}
      />
    </>
  );
}

export default ArtistAdd;

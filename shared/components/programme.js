'use strict'

import React, { Fragment } from 'react'
import Link from 'next/link'
import lodashMap from 'lodash.map'

const BOTH = false

const Programme = (props) => <div className='content box'>
  {props.multi && <Link href={{ pathname: '/programmes', query: { programme: props.code_programme } }}><a>
    <h2 className='title is-2'>{props.nom}</h2>
    <h3 className='subtitle is-3'>{props.code_programme}</h3>
  </a></Link>}
  <p>Catégorie: <span className='tag is-primary'>{props.categorie.libelle}</span></p>
  <p>Famille: <Link href={{ pathname: '/programmes', query: { famille: props.famille.code } }}><a className='tag is-info'>{props.famille.libelle}</a></Link></p>

  {props.cegeps && (props.cegeps.length > 0) && <Fragment>
    <h4 className='title is-4'>CÉGEPS</h4>
    <ul>
      {props.cegeps.map((x) => <li key={x.code_college}>
        <Link href={{ pathname: '/cegeps', query: { cegep: x.code_college } }}><a>
          {x.nom_long}
        </a></Link>
      </li>)}
    </ul>
  </Fragment>}

  <h4 className='title is-4'>Description</h4>
  <div dangerouslySetInnerHTML={{ __html: props.d2 }} />

  {BOTH && <Fragment>
    <h4 className='title is-4'>Description</h4>
    {props.description.map((p, i) => <p key={i}>
      {p}
    </p>)}
  </Fragment>}

  {props.exigences_du_marche && (props.exigences_du_marche.length > 0) && <Fragment>
    <h4 className='title is-4'>Exigences du marché</h4>
    <ul>
      {props.exigences_du_marche.map((x) => x.trim()).filter(Boolean).map((x, i) => <li key={i}>
        {x}
      </li>)}
    </ul>
  </Fragment>}

  {props.milieux_de_travail && (props.milieux_de_travail.length > 0) && <Fragment>
    <h4 className='title is-4'>Milieux de travail</h4>
    <ul>
      {props.milieux_de_travail.map((x, i) => <li key={i}>
        {x}
      </li>)}
    </ul>
  </Fragment>}

  {props.postes_offerts && (props.postes_offerts.length > 0) && <Fragment>
    <h4 className='title is-4'>Postes offerts</h4>
    <ul>
      {props.postes_offerts.map((x, i) => <li key={i}>
        {x}
      </li>)}
    </ul>
  </Fragment>}

  {props.statistiques_admission && lodashMap(props.statistiques_admission, (v) => v).filter(Boolean).length > 0 && <Fragment>
    <h4 className='title is-4'>Statistiques d’admission</h4>
    <div className='columns'>
      {lodashMap(props.statistiques_admission, (v, k) => v && <div className='column' key={k}>
        <h5 className='title is-5'>{k}</h5>
        <dl>
          <dt>Tous admis</dt>
          <dd>{v.tous_admis} {(v.tous_admis > 1) && (props.cegeps.length > 1) && <i>(env. {Math.round(v.tous_admis / props.cegeps.length)} par CÉGEP)</i>}</dd>
          <dt>Demandes tour 1</dt>
          <dd>{v.demandes_tour1}</dd>
          <dt>Admis tour 1</dt>
          <dd>{v.admis_tour1}</dd>
        </dl>
      </div>)}
    </div>
  </Fragment>}

  {props.c2 && <Fragment>
    <h4 className='title is-4'>Commentaires</h4>
    <div dangerouslySetInnerHTML={{ __html: props.c2 }} />
  </Fragment>}

  {BOTH && props.commentaires && (props.commentaires.length > 0) && <Fragment>
    <h4 className='title is-4'>Commentaires</h4>
    {props.commentaires.map((p, i) => <p key={i}>
      {p}
    </p>)}
  </Fragment>}
</div>

export default Programme

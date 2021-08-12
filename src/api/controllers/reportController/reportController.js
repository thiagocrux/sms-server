const Patient = require('../../models/Patient');
const Exam = require('../../models/Exam');
const Treatment = require('../../models/Treatment');
const Notification = require('../../models/Notification');
const Observation = require('../../models/Observation');

exports.getReport = async (req, res) => {
  try {
    /* Patients */

    // Retorna um objeto com todos os pacientes
    const patients = await Patient.find({});

    // Retorna o número total de pacientes
    const numberOfPatients = patients.length;

    // Retorna o número de pacientes do sexo feminino
    const numberOfFemalePatients = patients.filter(
      ({ sex }) => sex === 'Feminino'
    ).length;

    // Retorna o número de pacientes do sexo masculino
    const numberOfMalePatients = patients.filter(
      ({ sex }) => sex === 'Masculino'
    ).length;

    // Retorna o número de pacientes intersexo
    const numberOfIntersexPatients = patients.filter(
      ({ sex }) => sex === 'Intersexo'
    ).length;

    /* Gênero */

    // Retorna o número de pacientes cisgênero
    const cisgenderPatients = patients.filter(
      ({ gender }) => gender === 'Cisgênero'
    ).length;

    // Retorna o número de pacientes transgênero
    const transgenderPatients = patients.filter(
      ({ gender }) => gender === 'Transgênero'
    ).length;

    // Retorna o número de pacientes não-binários
    const nonBinaryPatients = patients.filter(
      ({ gender }) => gender === 'Não-binário'
    ).length;

    // Retorna o número de pacientes agênero
    const nongenderPatients = patients.filter(
      ({ gender }) => gender === 'Agênero'
    ).length;

    /* Sexualidade */

    // Retorna o número de pacientes heterossexuais
    const heterosexualPatients = patients.filter(
      ({ sexuality }) => sexuality === 'Heterossexual'
    ).length;

    // Retorna o número de pacientes homossexuais
    const homosexualPatients = patients.filter(
      ({ sexuality }) => sexuality === 'Homossexual'
    ).length;

    // Retorna o número de pacientes bissexuais
    const bisexualPatients = patients.filter(
      ({ sexuality }) => sexuality === 'Bissexual'
    ).length;

    // Retorna o número de pacientes assexuais
    const asexualPatients = patients.filter(
      ({ sexuality }) => sexuality === 'Assexual'
    ).length;

    // Retorna o número de pacientes com outro tipo de sexualidade
    const patientsWithAnotherSexualityType = patients.filter(
      ({ sexuality }) => sexuality === 'Outro'
    ).length;

    /* Raça/cor */

    // Retorna o número de pacientes de cor parda
    const mixedRacePatients = patients.filter(
      ({ race }) => race === 'Parda'
    ).length;

    // Retorna o número de pacientes de cor branca
    const whitePatients = patients.filter(
      ({ race }) => race === 'Branca'
    ).length;

    // Retorna o número de pacientes de cor preta
    const blackPatients = patients.filter(
      ({ race }) => race === 'Preta'
    ).length;

    // Retorna o número de pacientes de origem indígena
    const indigenousPatients = patients.filter(
      ({ race }) => race === 'Indígena'
    ).length;

    // Retorna o número de pacientes de cor amarela
    const yellowPatients = patients.filter(
      ({ race }) => race === 'Amarela'
    ).length;

    /* Nível de escolaridade */

    // Retorna o número de pacientes analfabetos
    const illiteratePatients = patients.filter(
      ({ schooling }) => schooling === 'Analfabeto'
    ).length;

    // Retorna o número de pacientes com ensino básico incompleto
    const patientsWithUnfinishedBasicEducation = patients.filter(
      ({ schooling }) =>
        schooling ===
        '1ª a 4ª série incompleta do ensino fundamental (antigo primário ou 1º grau)'
    ).length;

    // Retorna o número de pacientes com ensino básico completo
    const patientsWithBasicEducation = patients.filter(
      ({ schooling }) =>
        schooling ===
        '4ª série completa do ensino fundamental (antigo primário ou 1º grau)'
    ).length;

    // Retorna o número de pacientes com ensino fundamental incompleto
    const patientsWithUnfinishedFundamentalEducation = patients.filter(
      ({ schooling }) =>
        schooling ===
        '5ª a 8ª série incompleta do ensino fundamental (antigo ginásio ou 1º grau)'
    ).length;

    // Retorna o número de pacientes com ensino fundamental completo
    const patientsWithFundamentalEducation = patients.filter(
      ({ schooling }) =>
        schooling === 'Ensino fundamental completo (antigo ginásio ou 1º grau)'
    ).length;

    // Retorna o número de pacientes com ensino médio incompleto
    const patientsWithUnfinishedHighSchoolEducation = patients.filter(
      ({ schooling }) =>
        schooling === 'Ensino médio incompleto (antigo colegial ou 2º grau)'
    ).length;

    // Retorna o número de pacientes com ensino médio completo
    const patientsWithHighScoolEducation = patients.filter(
      ({ schooling }) =>
        schooling === 'Ensino médio completo (antigo colegial ou 2º grau)'
    ).length;

    // Retorna o número de pacientes com ensino superior incompleto
    const patientsWithUnfinishedHigherEducation = patients.filter(
      ({ schooling }) => schooling === 'Educação superior incompleta'
    ).length;

    // Retorna o número de pacientes com ensino superior completo
    const patientsWithHigherEducation = patients.filter(
      ({ schooling }) => schooling === 'Educação superior completa'
    ).length;

    // Retorna o número de pacientes cuja escolaridade não se aplica
    const patientsWhoseEducationNotApply = patients.filter(
      ({ schooling }) => schooling === 'Não se aplica'
    ).length;

    /* Tipo de notificação */

    // Retorna o número de ocorrências de sífilis adquirida
    const acquiredSyphilisOcurrences = patients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis adquirida'
    ).length;

    // Retorna o número de ocorrências de sífilis congênita
    const congenitalSyphilisOcurrences = patients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis congênita'
    ).length;

    // Retorna o número de ocorrências de sífilis em gestantes
    const gestationalSyphilisOcurrences = patients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis em gestante'
    ).length;

    /* Exames */

    // Retorna um objeto com todos os exames
    const exams = await Exam.find({});

    // Retorna o número total de exames
    const numberOfExams = exams.length;

    // Retorna o número de testes rápidos
    const numberOfQuickTests = exams.filter(
      ({ trepTestType }) => trepTestType === 'Teste rápido'
    ).length;

    // Retorna o número de testes FTA-ABS IgMs
    const numberOfIgMTests = exams.filter(
      ({ trepTestType }) => trepTestType === 'FTA-ABS IgM'
    ).length;

    // Retorna o número de testes FTA-ABS IgGs
    const numberOfIgGTests = exams.filter(
      ({ trepTestType }) => trepTestType === 'FTA-ABS IgG'
    ).length;

    // Retorna o número de resultados reagentes
    const numberOfReagentResults = exams.filter(
      ({ trepTestResult }) => trepTestResult === 'Reagente'
    ).length;

    // Retorna o número de resultados não-reagentes
    const numberOfNonReagentResults = exams.filter(
      ({ trepTestResult }) => trepTestResult === 'Não-reagente'
    ).length;

    /* Notificações */

    // Retorna o número total de notificações
    const numberOfNotifications = await Notification.countDocuments({});

    /* Observações */

    // Retorna o número total de observações
    const numberOfObservations = await Observation.countDocuments({});

    /* Tratamentos */

    // Retorna todos os tratamentos
    const treatments = await Treatment.find({});

    // Retorna o número total de tratamentos
    const numberOfTreatments = treatments.length;

    // Retorna o número de tratamentos que usam penicilina
    const numberOfTreatmentsUsingPenicillin = treatments.filter(
      ({ medication }) => medication === 'Penicilina'
    ).length;

    // Retorna o número de tratamentos que usam doxiciclina
    const numberOfTreatmentsUsingDoxycycline = treatments.filter(
      ({ medication }) => medication === 'Doxiciclina'
    ).length;

    // Retorna o número de tratamentos que usam ceftriaxona
    const numberOfTreatmentsUsingCeftriaxone = treatments.filter(
      ({ medication }) => medication === 'Ceftriaxona'
    ).length;

    res.status(200).json({
      status: 'success',
      stats: {
        numberOfPatients,
        numberOfFemalePatients,
        numberOfMalePatients,
        numberOfIntersexPatients,
        cisgenderPatients,
        transgenderPatients,
        nonBinaryPatients,
        nongenderPatients,
        heterosexualPatients,
        homosexualPatients,
        bisexualPatients,
        asexualPatients,
        patientsWithAnotherSexualityType,
        mixedRacePatients,
        whitePatients,
        blackPatients,
        indigenousPatients,
        yellowPatients,
        illiteratePatients,
        patientsWithUnfinishedBasicEducation,
        patientsWithBasicEducation,
        patientsWithUnfinishedFundamentalEducation,
        patientsWithFundamentalEducation,
        patientsWithUnfinishedHighSchoolEducation,
        patientsWithHighScoolEducation,
        patientsWithUnfinishedHigherEducation,
        patientsWithHigherEducation,
        patientsWhoseEducationNotApply,
        acquiredSyphilisOcurrences,
        congenitalSyphilisOcurrences,
        gestationalSyphilisOcurrences,
        numberOfExams,
        numberOfQuickTests,
        numberOfIgMTests,
        numberOfIgGTests,
        numberOfReagentResults,
        numberOfNonReagentResults,
        numberOfNotifications,
        numberOfObservations,
        numberOfTreatments,
        numberOfTreatmentsUsingPenicillin,
        numberOfTreatmentsUsingDoxycycline,
        numberOfTreatmentsUsingCeftriaxone,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failure',
      error,
    });
  }
};

/* RESULTADO POR ANO */

exports.getReportByYear = async (req, res) => {
  try {
    const { year } = req.params;

    /* Pacientes */

    // Retorna todos os pacientes
    const patients = await Patient.find({});

    // Retorna todos os pacientes cadastrados no ano passado por parâmetro
    const filteredPatients = patients.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    // Retorna o número de pacientes cadastrados no ano passado por parâmetro
    const numberOfPatients = filteredPatients.length;

    /* Sexo */

    // Retorna o número de pacientes do sexo feminino
    const numberOfFemalePatients = filteredPatients.filter(
      ({ sex }) => sex === 'Feminino'
    ).length;

    // Retorna o número de pacientes do sexo masculino
    const numberOfMalePatients = filteredPatients.filter(
      ({ sex }) => sex === 'Masculino'
    ).length;

    // Retorna o número de pacientes intersexo
    const numberOfIntersexPatients = filteredPatients.filter(
      ({ sex }) => sex === 'Intersexo'
    ).length;

    /* Gênero */

    // Retorna o número de pacientes cisgênero
    const cisgenderPatients = filteredPatients.filter(
      ({ gender }) => gender === 'Cisgênero'
    ).length;

    // Retorna o número de pacientes transgênero
    const transgenderPatients = filteredPatients.filter(
      ({ gender }) => gender === 'Transgênero'
    ).length;

    // Retorna o número de pacientes não-binários
    const nonBinaryPatients = filteredPatients.filter(
      ({ gender }) => gender === 'Não-binário'
    ).length;

    // Retorna o número de pacientes agênero
    const nongenderPatients = filteredPatients.filter(
      ({ gender }) => gender === 'Agênero'
    ).length;

    /* Sexualidade */

    // Retorna o número de pacientes heterossexuais
    const heterosexualPatients = filteredPatients.filter(
      ({ sexuality }) => sexuality === 'Heterossexual'
    ).length;

    // Retorna o número de pacientes homossexuais
    const homosexualPatients = filteredPatients.filter(
      ({ sexuality }) => sexuality === 'Homossexual'
    ).length;

    // Retorna o número de pacientes bissexuais
    const bisexualPatients = filteredPatients.filter(
      ({ sexuality }) => sexuality === 'Bissexual'
    ).length;

    // Retorna o número de pacientes assexuais
    const asexualPatients = filteredPatients.filter(
      ({ sexuality }) => sexuality === 'Assexual'
    ).length;

    // Retorna o número de pacientes com outro tipo de sexualidade
    const patientsWithAnotherSexualityType = filteredPatients.filter(
      ({ sexuality }) => sexuality === 'Outro'
    ).length;

    /* Raça/cor */

    // Retorna o número de pacientes de cor parda
    const mixedRacePatients = filteredPatients.filter(
      ({ race }) => race === 'Parda'
    ).length;

    // Retorna o número de pacientes de cor branca
    const whitePatients = filteredPatients.filter(
      ({ race }) => race === 'Branca'
    ).length;

    // Retorna o número de pacientes de cor preta
    const blackPatients = filteredPatients.filter(
      ({ race }) => race === 'Preta'
    ).length;

    // Retorna o número de pacientes de origem indígena
    const indigenousPatients = filteredPatients.filter(
      ({ race }) => race === 'Indígena'
    ).length;

    // Retorna o número de pacientes de cor amarela
    const yellowPatients = filteredPatients.filter(
      ({ race }) => race === 'Amarela'
    ).length;

    /* Nível de escolaridade */

    // Retorna o número de pacientes analfabetos
    const illiteratePatients = filteredPatients.filter(
      ({ schooling }) => schooling === 'Analfabeto'
    ).length;

    // Retorna o número de pacientes com ensino básico incompleto
    const patientsWithUnfinishedBasicEducation = filteredPatients.filter(
      ({ schooling }) =>
        schooling ===
        '1ª a 4ª série incompleta do ensino fundamental (antigo primário ou 1º grau)'
    ).length;

    // Retorna o número de pacientes com ensino básico completo
    const patientsWithBasicEducation = filteredPatients.filter(
      ({ schooling }) =>
        schooling ===
        '4ª série completa do ensino fundamental (antigo primário ou 1º grau)'
    ).length;

    // Retorna o número de pacientes com ensino fundamental incompleto
    const patientsWithUnfinishedFundamentalEducation = filteredPatients.filter(
      ({ schooling }) =>
        schooling ===
        '5ª a 8ª série incompleta do ensino fundamental (antigo ginásio ou 1º grau)'
    ).length;

    // Retorna o número de pacientes com ensino fundamental completo
    const patientsWithFundamentalEducation = filteredPatients.filter(
      ({ schooling }) =>
        schooling === 'Ensino fundamental completo (antigo ginásio ou 1º grau)'
    ).length;

    // Retorna o número de pacientes com ensino médio incompleto
    const patientsWithUnfinishedHighSchoolEducation = filteredPatients.filter(
      ({ schooling }) =>
        schooling === 'Ensino médio incompleto (antigo colegial ou 2º grau)'
    ).length;

    // Retorna o número de pacientes com ensino médio completo
    const patientsWithHighScoolEducation = filteredPatients.filter(
      ({ schooling }) =>
        schooling === 'Ensino médio completo (antigo colegial ou 2º grau)'
    ).length;

    // Retorna o número de pacientes com ensino superior incompleto
    const patientsWithUnfinishedHigherEducation = filteredPatients.filter(
      ({ schooling }) => schooling === 'Educação superior incompleta'
    ).length;

    // Retorna o número de pacientes com ensino superior completo
    const patientsWithHigherEducation = filteredPatients.filter(
      ({ schooling }) => schooling === 'Educação superior completa'
    ).length;

    // Retorna o número de pacientes cuja escolaridade não se aplica
    const patientsWhoseEducationNotApply = filteredPatients.filter(
      ({ schooling }) => schooling === 'Não se aplica'
    ).length;

    /* Tipo de notificação */

    // Retorna o número de ocorrências de sífilis adquirida
    const acquiredSyphilisOcurrences = filteredPatients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis adquirida'
    ).length;

    // Retorna o número de ocorrências de sífilis congênita
    const congenitalSyphilisOcurrences = filteredPatients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis congênita'
    ).length;

    // Retorna o número de ocorrências de sífilis em gestantes
    const gestationalSyphilisOcurrences = filteredPatients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis em gestante'
    ).length;

    /* Exames */

    // Retorna todos os exames
    const exams = await Exam.find({});

    // Retorna todos os exames cadastrados no ano passado por parâmetro
    const filteredExams = exams.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    // Retorna o número de exames cadastrados no ano passado por parâmetro
    const numberOfExams = filteredExams.length;

    // Retorna o número de testes rápidos
    const numberOfQuickTests = filteredExams.filter(
      ({ trepTestType }) => trepTestType === 'Teste rápido'
    ).length;

    // Retorna o número de testes FTA-ABS IgMs
    const numberOfIgMTests = filteredExams.filter(
      ({ trepTestType }) => trepTestType === 'FTA-ABS IgM'
    ).length;

    // Retorna o número de testes FTA-ABS IgGs
    const numberOfIgGTests = filteredExams.filter(
      ({ trepTestType }) => trepTestType === 'FTA-ABS IgG'
    ).length;

    // Retorna o número de resultados reagentes
    const numberOfReagentResults = filteredExams.filter(
      ({ trepTestResult }) => trepTestResult === 'Reagente'
    ).length;

    // Retorna o número de resultados não-reagentes
    const numberOfNonReagentResults = filteredExams.filter(
      ({ trepTestResult }) => trepTestResult === 'Não-reagente'
    ).length;

    /* Notificações */

    // Retorna todas as notificações
    const notifications = await Notification.find({});

    // Retorna todas as notificações cadastradas no ano passado por parâmetro
    const filteredNotifications = notifications.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    // Retorna o número de notificações cadastradas no ano passado por parâmetro
    const numberOfNotifications = filteredNotifications.length;

    /* Observações */

    // Retorna todas as observações
    const observations = await Observation.find({});

    // Retorna todas as observações cadastrados no ano passado por parâmetro
    const filteredObservations = observations.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    // Retorna o número de notificações cadastradas no ano passado por parâmetro
    const numberOfObservations = filteredObservations.length;

    /* Tratamentos */

    // Retorna todos os tratamentos
    const treatments = await Treatment.find({});

    // Retorna todos os tratamentos cadastrados no ano passado por parâmetro
    const filteredTreatments = treatments.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    // Retorna o número de tratamentos cadastrados no ano passado por parâmetro
    const numberOfTreatments = filteredTreatments.length;

    // Retorna o número de tratamentos usando penicilina
    const numberOfTreatmentsUsingPenicillin = filteredTreatments.filter(
      ({ medication }) => medication === 'Penicilina'
    ).length;

    // Retorna o número de tratamentos usando doxiciclina
    const numberOfTreatmentsUsingDoxycycline = filteredTreatments.filter(
      ({ medication }) => medication === 'Doxiciclina'
    ).length;

    // Retorna o número de tratamentos usando ceftriaxona
    const numberOfTreatmentsUsingCeftriaxone = filteredTreatments.filter(
      ({ medication }) => medication === 'Ceftriaxona'
    ).length;

    res.status(200).json({
      status: 'success',
      stats: {
        numberOfPatients,
        numberOfFemalePatients,
        numberOfMalePatients,
        numberOfIntersexPatients,
        cisgenderPatients,
        transgenderPatients,
        nonBinaryPatients,
        nongenderPatients,
        heterosexualPatients,
        homosexualPatients,
        bisexualPatients,
        asexualPatients,
        patientsWithAnotherSexualityType,
        mixedRacePatients,
        whitePatients,
        blackPatients,
        indigenousPatients,
        yellowPatients,
        illiteratePatients,
        patientsWithUnfinishedBasicEducation,
        patientsWithBasicEducation,
        patientsWithUnfinishedFundamentalEducation,
        patientsWithFundamentalEducation,
        patientsWithUnfinishedHighSchoolEducation,
        patientsWithHighScoolEducation,
        patientsWithUnfinishedHigherEducation,
        patientsWithHigherEducation,
        patientsWhoseEducationNotApply,
        acquiredSyphilisOcurrences,
        congenitalSyphilisOcurrences,
        gestationalSyphilisOcurrences,
        numberOfExams,
        numberOfQuickTests,
        numberOfIgMTests,
        numberOfIgGTests,
        numberOfReagentResults,
        numberOfNonReagentResults,
        numberOfNotifications,
        numberOfObservations,
        numberOfTreatments,
        numberOfTreatmentsUsingPenicillin,
        numberOfTreatmentsUsingDoxycycline,
        numberOfTreatmentsUsingCeftriaxone,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failure',
      error,
    });
  }
};
